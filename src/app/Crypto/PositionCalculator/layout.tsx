import SEO from "@/config/SEO.json";
import type { ReactNode } from "react";

export const metadata = {
  title: SEO.PositionCalculator.title,
  description: SEO.PositionCalculator.description,
  openGraph: {
    title: SEO.PositionCalculator.title,
    description: SEO.PositionCalculator.description,
    images: [{ url: SEO.PositionCalculator.image }],
    type: SEO.PositionCalculator.type,
  },
  twitter: {
    title: SEO.PositionCalculator.title,
    description: SEO.PositionCalculator.description,
    images: [SEO.PositionCalculator.image],
    card: "summary_large_image",
  },
};

const PositionCalculatorLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default PositionCalculatorLayout;
