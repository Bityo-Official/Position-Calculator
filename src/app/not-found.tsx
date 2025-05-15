"use client";

import AddBtn from "@/components/Button/AddBtn";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "nextjs-toploader/app";

import SEO from "@/config/SEO.json";
import type { ReactNode } from "react";

export const metadata = {
  title: SEO.NotFound.title,
  description: SEO.NotFound.description,
  openGraph: {
    title: SEO.NotFound.title,
    description: SEO.NotFound.description,
    images: [{ url: SEO.NotFound.image }],
    type: SEO.NotFound.type,
  },
  twitter: {
    title: SEO.NotFound.title,
    description: SEO.NotFound.description,
    images: [SEO.NotFound.image],
    card: "summary_large_image",
  },
};

const NotFound = () => {
  // 處理路由變化
  const router = useRouter();

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-lg text-gray-600">找不到你要的頁面</p>
        <AddBtn
          label="回首頁"
          className="mt-5"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="">
        <div className="absolute bottom-0 right-0 w-full shadow-[0_-4px_8px_-3px_rgba(0,0,0,0.05)]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
