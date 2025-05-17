import SEO from "@/config/SEO.json";
import type { ReactNode } from "react";

const baseUrl = "https://bityo.tw";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: SEO.DCA.title,
  description: SEO.DCA.description,
  image: baseUrl + SEO.DCA.image,
  openGraph: {
    title: SEO.DCA.title,
    description: SEO.DCA.description,
    images: [{ url: baseUrl + SEO.DCA.image }],
    type: SEO.DCA.type,
  },
  twitter: {
    title: SEO.DCA.title,
    description: SEO.DCA.description,
    images: [baseUrl + SEO.DCA.image],
    card: "summary_large_image",
  },
};

const DCALayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default DCALayout;
