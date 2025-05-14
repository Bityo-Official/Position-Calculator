"use client";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
import { useState, type ChangeEvent } from "react";

// TODO：
// 1. 最低保證金計算機：當L變動時，PV不變，IM不變，則最低保證金為？

const CryptoPage = () => {
  // 設 IM = initialCapital（Initial Margin）
  // 設 L = leverage（Leverage）
  // 設 PV = positionValue（Position Value）
  // 設 Q = positionQuantity（Position Quantity）
  // 設 AC = avgCost（Average Cost）
  // 設 TP = tp（Take Profit）
  // 設 SL = sl（Stop Loss）
  const [data, setData] = useState({
    initialCapital: 0,
    positionValue: 0,
    positionQuantity: 0,
    avgCost: 0,
    tp: 0,
    sl: 0,
  });

  // 處理輸入框的變化
  const handleChange =
    (field: keyof typeof data) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      setData((prev) => {
        const updated = { ...prev, [field]: value };

        // Q=PV/AC
        if (field === "positionValue" && updated.avgCost) {
          updated.positionQuantity = updated.positionValue / updated.avgCost;
        }

        // PV=Q*AC
        if (field === "positionQuantity" && updated.avgCost) {
          updated.positionValue = updated.positionQuantity * updated.avgCost;
        }

        // Q與PV的轉換
        if (field === "avgCost") {
          // ∃ Q => PV=Q*AC
          if (updated.positionQuantity) {
            updated.positionValue = updated.avgCost * updated.positionQuantity;
          } else if (updated.positionValue) {
            // ∃ PV => Q=PV/AC
            updated.positionQuantity = updated.positionValue / updated.avgCost;
          }
        }

        return updated;
      });
    };

  // 初始值賦值
  const { initialCapital, positionValue, positionQuantity, avgCost, tp, sl } =
    data;

  // 計算盈利
  const profit = (() => {
    // 如果TP存在，且AC存在，且Q存在，執行以下命令
    // （多頭）if TP>AC => Q*(TP-AC)
    // （空頭）if SL<AC => Q*(AC-TP)

    return tp > 0 && avgCost > 0 && positionQuantity > 0
      ? tp > avgCost
        ? (tp - avgCost) * positionQuantity
        : (avgCost - tp) * positionQuantity
      : 0;
  })();

  // 計算虧損
  const loss = (() => {
    // 如果SL存在，且AC存在，且Q存在，執行以下命令
    // （多頭）if TP>AC => Q*(AC-SL)
    // （空頭）if SL<AC => Q*(SL-TC)

    return sl > 0 && avgCost > 0 && positionQuantity > 0
      ? tp > avgCost
        ? (avgCost - sl) * positionQuantity
        : (sl - avgCost) * positionQuantity
      : 0;
  })();

  // 計算倉位方向
  const positionType = (() => {
    // if TP>AC 且 SL>AC，都大於AC就是多，且套保
    // if TP<AC 且 SL<AC，都小於AC就是空，且套保
    // if TP>AC 且 SL<AC，就是多
    // if TP<AC 且 SL>AC，就是空

    if (tp > avgCost && sl > avgCost) return "多（套保）";
    if (tp < avgCost && sl < avgCost) return "空（套保）";
    if (tp > avgCost) return "多";
    if (tp < avgCost) return "空";
    return "-";
  })();

  // 計算清算剩餘比率
  const liqPercent = (() => {
    // 如果IM存在，且AC存在，且Q存在，執行以下命令
    if (!initialCapital || !avgCost || !positionValue) return 0;

    // L=PV/IM
    const leverage = positionValue / initialCapital;

    // if TP>AC 且 SL>AC，都大於AC就是多，且套保
    // if TP<AC 且 SL<AC，都小於AC就是空，且套保
    // if TP>AC 且 SL<AC，就是多
    // if TP<AC 且 SL>AC，就是空

    return tp > avgCost ? (1 / leverage) * 100 : (1 + 1 / leverage) * 100;
  })();

  // 計算清算價格
  const liqPrice = (() => {
    // 如果IM存在，且AC存在，且Q存在，執行以下命令
    if (!initialCapital || !avgCost || !positionValue) return 0;

    // L=PV/IM
    const leverage = positionValue / initialCapital;
    // if TP>AC 且 SL>AC，LIQ=AC*(100%/L)
    // if TP<AC 且 SL<AC，LIQ=AC*(100%/L + 1)
    // if TP>AC 且 SL<AC，LIQ=AC*(100%/L)
    // if TP<AC 且 SL>AC，LIQ=AC*(100%/L + 1)
    if (tp > avgCost && sl > avgCost) return (1 / leverage) * avgCost; // 多（套保）
    if (tp < avgCost && sl < avgCost) return (1 + 1 / leverage) * avgCost; // 空（套保）
    if (tp > avgCost) return (1 / leverage) * avgCost; // 多
    if (tp < avgCost) return (1 + 1 / leverage) * avgCost; // 空
    return (1 / leverage) * avgCost; // 預設
  })();

  // 計算預估盈利率
  const profitRate = (() => {
    // 如果TP存在，且AC存在，且Q存在，執行以下命令
    // （多頭）if TP>AC => (TP-AC)/AC
    // （空頭）if TP<AC => (AC-TP)/AC

    return tp > 0 && avgCost > 0 && positionQuantity > 0
      ? tp > avgCost
        ? (tp - avgCost) / avgCost
        : (avgCost - tp) / avgCost
      : 0;
  })();

  // 計算預估虧損率
  const lossRate = (() => {
    // 如果SL存在，且AC存在，且Q存在，執行以下命令
    // （空頭）if SL>AC => (AC-SL)/SL
    // （多頭）if SL<AC => (SL-AC)/AC

    return sl > 0 && avgCost > 0 && positionQuantity > 0
      ? sl > avgCost
        ? (avgCost - sl) / sl
        : (sl - avgCost) / avgCost
      : 0;
  })();

  // 計算盈虧比
  const riskRewardRatio = (() => {
    // TP存在，且AC存在，且Q存在，執行以下命令
    // （多頭）if TP>AC => TP-AC / AC-SL
    // （空頭）if TP<AC => AC-TP / SL-AC

    return tp > 0 && avgCost > 0 && positionQuantity > 0
      ? tp > avgCost
        ? (tp - avgCost) / (avgCost - sl)
        : (avgCost - tp) / (sl - avgCost)
      : 0;
  })();

  return (
    <div className="grid grid-cols-2 p-5 gap-5">
      <div>
        <Card
          title="加密貨幣永續合約 - 倉位計算"
          description="請輸入您的永續合約詳細信息以計算倉位"
        >
          <div className="flex flex-col w-full gap-5">
            <InputField
              label="本金"
              name="initialCapital"
              value={initialCapital}
              onChange={handleChange("initialCapital")}
            />
            <InputField
              label="倉位價值"
              name="positionValue"
              value={positionValue}
              onChange={handleChange("positionValue")}
            />
            <InputField
              label="持倉量"
              name="positionQuantity"
              value={positionQuantity}
              onChange={handleChange("positionQuantity")}
            />
            <InputField
              label="持倉均價"
              name="avgCost"
              value={avgCost}
              onChange={handleChange("avgCost")}
            />
            <InputField
              label="止盈價"
              name="tp"
              value={tp}
              onChange={handleChange("tp")}
            />
            <InputField
              label="止損價"
              name="sl"
              value={sl}
              onChange={handleChange("sl")}
            />
          </div>
        </Card>
      </div>
      <div>
        <Card title={"計算結果"} description={"倉位計算結果如下"}>
          <div className="flex flex-col gap-5">
            <ResultItem
              label="實際槓桿"
              value={
                initialCapital !== 0
                  ? (positionValue / initialCapital).toFixed(2)
                  : "0"
              }
            />

            <ResultItem
              label="LIQ％"
              value={liqPercent !== 0 ? `${liqPercent}%` : "0"}
            />
            <ResultItem label="清算價格 (LIQ)" value={liqPrice.toFixed(2)} />
            <ResultItem label="預估盈利" value={profit.toFixed(2)} />
            <ResultItem label="預估虧損" value={loss.toFixed(2)} />
            <ResultItem label="預估盈利率" value={`${profitRate * 100}%`} />
            <ResultItem label="預估虧損率" value={`${lossRate * 100}%`} />
            <ResultItem label="盈虧比" value={riskRewardRatio.toFixed(2)} />
            <ResultItem label="倉位方向" value={positionType} />
          </div>
        </Card>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <p className="text-sm font-medium leading-6 text-neutral-800">{label}</p>
    <Input
      name={name}
      type="number"
      id={name}
      value={value.toString()}
      placeholder={`請輸入${label}`}
      onChange={onChange}
      className="w-full"
    />
  </div>
);

const ResultItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <p className="text-sm font-medium text-neutral-800">{label}</p>
    <p className="text-sm text-neutral-700">{value}</p>
  </div>
);

export default CryptoPage;
