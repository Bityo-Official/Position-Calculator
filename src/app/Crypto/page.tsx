import Card from "@/components/Card/Card";

const CrpytoPage = () => {
  return (
    <div className="grid grid-cols-2 p-5">
      <div>
        <Card
          title="加密貨幣永續合約 - 倉位計算"
          description="請輸入您的永續合約詳細信息以計算倉位"
        >
          <div className="flex flex-col">
            {/* 倉位價值 */}
            <div>
              <p className="text-base">倉位價值</p>
            </div>
          </div>
        </Card>
      </div>
      <div>
        <p> </p>
      </div>
    </div>
  );
};

export default CrpytoPage;
