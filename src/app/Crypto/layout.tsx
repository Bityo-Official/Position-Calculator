"use client";

import Footer from "@/components/Footer/Footer";
import type { ReactNode } from "react";

// icon
import PenIcon from "@/image/pen.svg";
import BityoIcon from "@/image/bityo_bg_circle.png";

import Navbar from "@/components/Navbar/Navbar";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";

const routeInfo = {
  "/Crypto": { title: "投資計算機｜倉位計算", logo: BityoIcon },
  "/Manage/News": { title: "投資計算機｜風險管理", logo: PenIcon },
  "/Manage/Author": { title: "投資計算機｜倉位計算", logo: PenIcon },
  "/Manage/Create/Post": { title: "投資計算機｜倉位計算", logo: PenIcon },
  "/Manage/Create/Author": { title: "投資計算機｜倉位計算", logo: PenIcon },
  "/Manage/Edit/Author": { title: "投資計算機｜倉位計算", logo: PenIcon },
  "/Manage/Edit/Post": { title: "投資計算機｜倉位計算", logo: PenIcon },
};

const CryptoLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  // 自動根據當前路由決定標題與 logo
  const current = Object.entries(routeInfo).find(([key]) =>
    pathname?.startsWith(key),
  )?.[1] || { title: "投資計算機", logo: BityoIcon };

  const item = [
    { name: "倉位計算", path: "/Manage/Post", icon: PenIcon },
    { name: "風險管理", path: "/Manage/News", icon: PenIcon },
    { name: "全倉試算", path: "/Manage/Author", icon: PenIcon },
    { name: "逐倉試算", path: "/Manage/Author", icon: PenIcon },
    { name: "行情模擬", path: "/Manage/Author", icon: PenIcon },
    { name: "本站設定", path: "/Manage/Author", icon: PenIcon },
    { name: "關於幣友", path: "/Manage/Author", icon: PenIcon },
    { name: "幣友官網", path: "/Manage/Author", icon: PenIcon },
  ];

  return (
    <div className="flex min-h-screen h-full">
      <div className="hidden md:block">
        <Sidebar items={item} />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden md:ml-64">
        <Navbar
          title={current.title}
          logo={current.logo}
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
