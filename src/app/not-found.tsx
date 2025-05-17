import AddBtn from "@/components/Button/AddBtn";
import Footer from "@/components/Footer/Footer";
import BackToHomeBtn from "@/components/Button/BackToHomeBtn";

import SEO from "@/config/SEO.json";
import type { ReactNode } from "react";

const baseUrl = "https://bityo.tw";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: SEO.NotFound.title,
  description: SEO.NotFound.description,
  image: baseUrl + SEO.NotFound.image,
  openGraph: {
    title: SEO.NotFound.title,
    description: SEO.NotFound.description,
    images: [{ url: baseUrl + SEO.NotFound.image }],
    type: SEO.NotFound.type,
  },
  twitter: {
    title: SEO.NotFound.title,
    description: SEO.NotFound.description,
    images: [baseUrl + SEO.NotFound.image],
    card: "summary_large_image",
  },
};

const NotFound = () => {
  // 處理路由變化

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-lg text-gray-600">找不到你要的頁面</p>
        <BackToHomeBtn className="mt-5" />
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
