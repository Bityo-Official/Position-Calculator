"use client";
import DateChoose from "@/components/Input/DateChoose";
// TODO:
// 1. 複利計算機
// 2. 定期定額

import DropDown from "@/components/Input/DropDown";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

const DCA = () => {
  // 日期選擇的值
  const [date, setDate] = useState<DateRange | undefined>();

  // 處理日期選擇的變化
  const handleDateSelect = (range: DateRange | undefined) => {
    setDate(range);
    console.log(`選擇的日期範圍: ${range}`);
  };

  // 處理日期選擇的取消按鈕點擊事件
  const handleDateCancel = () => {
    setDate(undefined);
    console.log("日期選擇取消");
  };

  return (
    <div className="p-5">
      <div className="flex gap-3 flex-col sm:flex-row">
        <DropDown
          placeholder={"請選擇投資標的"}
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
          onSelect={() => {}}
          onCancel={() => {}}
        />
        <DropDown
          placeholder={"請選擇投資頻率"}
          options={["每月", "每週", "每日"]}
          selectedOption={""}
          onSelect={() => {}}
          onCancel={() => {}}
        />
        <DropDown
          placeholder={"請選擇本位貨幣"}
          options={[
            "新台幣（TWD）",
            "人民幣（CNY）",
            "泰達幣（USDT）",
            "日圓（JPY）",
            "歐元（EUR）",
          ]}
          selectedOption={""}
          onSelect={() => {}}
          onCancel={() => {}}
        />

        <DateChoose
          placeholder={"請選擇日期"}
          selected={undefined}
          onSelect={handleDateSelect}
          onCancel={handleDateCancel}
        />
      </div>
    </div>
  );
};

export default DCA;
