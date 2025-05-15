"use client";

import Footer from "@/components/Footer/Footer";
import { useState, type ReactNode } from "react";
import PenIcon from "@/image/pen.svg";
import BityoIcon from "@/image/bityo_bg_circle.png";
import Navbar from "@/components/Navbar/Navbar";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import {
  faBarsProgress,
  faBatteryFull,
  faBatteryHalf,
  faCalculator,
  faChartColumn,
  faGear,
  faPeopleGroup,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const routeInfo = {
  "/Crypto/PositionCalculator": {
    title: "投資計算機｜倉位計算",
    logo: BityoIcon,
  },
  "/Crypto/RiskManagement": { title: "投資計算機｜風險管理", logo: PenIcon },
  "/Crypto/CrossMarginCalculator": {
    title: "投資計算機｜全倉試算",
    logo: BityoIcon,
  },
  "/Crypto/IsolatedMarginCalculator": {
    title: "投資計算機｜逐倉試算",
    logo: BityoIcon,
  },
  "/Crypto/DCA": {
    title: "投資計算機｜定期定額專區",
    logo: BityoIcon,
  },
  "/Crypto/MarketSimulation": {
    title: "投資計算機｜行情模擬",
    logo: BityoIcon,
  },
  "/Crypto/Setting": { title: "投資計算機｜本站設定", logo: BityoIcon },
  "/Crypto/AboutBityo": { title: "投資計算機｜關於幣友", logo: BityoIcon },
};

const CryptoLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const current = Object.entries(routeInfo).find(([key]) =>
    pathname?.startsWith(key),
  )?.[1] || { title: "投資計算機", logo: BityoIcon };

  const item = [
    {
      name: "倉位計算",
      path: "/Crypto/PositionCalculator",
      icon: faCalculator,
    },
    {
      name: "定期定額",
      path: "/Crypto/DCA",
      icon: faBarsProgress,
    },
    {
      name: "風險管理",
      path: "/Crypto/RiskManagement",
      icon: faBarsProgress,
      disabled: true,
    },
    {
      name: "全倉試算",
      path: "/Crypto/CrossMarginCalculator",
      icon: faBatteryFull,
      disabled: true,
    },
    {
      name: "逐倉試算",
      path: "/Crypto/IsolatedMarginCalculator",
      icon: faBatteryHalf,
      disabled: true,
    },
    {
      name: "行情模擬",
      path: "/Crypto/MarketSimulation",
      icon: faChartColumn,
      disabled: true,
    },
    { name: "本站設定", path: "/Crypto/Setting", icon: faGear, disabled: true },
    {
      name: "關於幣友",
      path: "/Crypto/AboutBityo",
      icon: faPeopleGroup,
      disabled: true,
    },
    {
      name: "幣友官網",
      path: "https://bityo.tw",
      icon: faUpRightFromSquare,
    },
  ];

  return (
    <div className="flex min-h-screen h-full relative">
      {/* Sidebar */}
      <Sidebar
        items={item}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* 手機版遮罩 */}
      {isSidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex flex-col flex-1 overflow-hidden md:ml-64 z-0">
        <Navbar
          title={current.title}
          logo={current.logo}
          onSidebarBtnClick={() => setIsSidebarOpen(!isSidebarOpen)}
          userName="王小明"
          className="px-4"
        />
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col min-h-full border-gray-200 border-dashed rounded-lg bg-white relative">
            {children}
            <div className="pt-10">
              <div className="absolute bottom-0 right-0 w-full shadow-[0_-4px_8px_-3px_rgba(0,0,0,0.05)]">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoLayout;
