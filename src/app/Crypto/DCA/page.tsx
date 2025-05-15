"use client";

import DcaChart from "@/components/Charts/DcaChart";
import DateChoose from "@/components/Input/DateChoose";
import DropDown from "@/components/Input/DropDown";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import type { DcaPoint } from "@/types/Charts/DcaChart";

const rawData: Omit<DcaPoint, "index">[] = [
  {
    date: "2024-05-01",
    value: 1000,
    savings: 900,
    benchmark: 850,
  },
  {
    date: "2024-05-02",
    value: 1000,
    savings: 900,
    benchmark: 850,
  },
  {
    date: "2024-05-03",
    value: 1000,
    savings: 900,
    benchmark: 850,
  },
];

const data: DcaPoint[] = rawData.map((d, i) => ({ ...d, index: i + 1 }));

const DCA = () => {
  const [date, setDate] = useState<DateRange | undefined>();

  const handleDateSelect = (range: DateRange | undefined) => {
    setDate(range);
    console.log("選擇的日期範圍:", range);
  };

  const handleDateCancel = () => {
    setDate(undefined);
    console.log("日期選擇取消");
  };

  const handleDropdownSelect = (option: string) => {
    console.log("選擇: ", option);
  };

  return (
    <div className="p-5">
      <div className="flex gap-3 flex-col sm:flex-row">
        <DropDown
          placeholder="請選擇投資標的"
          options={[
            "BTC",
            "ETH",
            "ADA",
            "SUI",
            "APT",
            "TON",
            "IOTA",
            "BNB",
            "SOL",
            "XRP",
            "DOT",
            "TRON",
            "LINK",
            "DOGE",
            "UNI",
          ]}
          selectedOption={""}
          onSelect={handleDropdownSelect}
          onCancel={() => {}}
        />
        <DropDown
          placeholder="請選擇投資頻率"
          options={["每月", "每週", "每日"]}
          selectedOption={""}
          onSelect={handleDropdownSelect}
          onCancel={() => {}}
        />
        <DropDown
          placeholder="請選擇本位貨幣"
          options={[
            "新台幣（TWD）",
            "人民幣（CNY）",
            "泰達幣（USDT）",
            "日圓（JPY）",
            "歐元（EUR）",
          ]}
          selectedOption={""}
          onSelect={handleDropdownSelect}
          onCancel={() => {}}
        />
        <DateChoose
          placeholder="請選擇日期"
          selected={date}
          onSelect={handleDateSelect}
          onCancel={handleDateCancel}
        />
      </div>
      <DcaChart />
    </div>
  );
};

export default DCA;
