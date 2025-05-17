import SEO from "@/config/SEO.json";
import type { ReactNode } from "react";

const baseUrl = "https://bityo.tw";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: SEO.PositionCalculator.title,
  description: SEO.PositionCalculator.description,
  image: baseUrl + SEO.PositionCalculator.image,
  openGraph: {
    title: SEO.PositionCalculator.title,
    description: SEO.PositionCalculator.description,
    images: [{ url: baseUrl + SEO.PositionCalculator.image }],
    type: SEO.PositionCalculator.type,
  },
  twitter: {
    title: SEO.PositionCalculator.title,
    description: SEO.PositionCalculator.description,
    images: [baseUrl + SEO.PositionCalculator.image],
    card: "summary_large_image",
  },
};

const PositionCalculatorLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default PositionCalculatorLayout;
