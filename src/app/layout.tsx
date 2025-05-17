import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import SEO from "@/config/SEO.json";

const baseUrl = "https://bityo.tw";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: SEO.Index.title,
  description: SEO.Index.description,
  image: baseUrl + SEO.Index.image,
  openGraph: {
    title: SEO.Index.title,
    description: SEO.Index.description,
    images: [{ url: baseUrl + SEO.Index.image }],
    type: SEO.Index.type,
  },
  twitter: {
    title: SEO.Index.title,
    description: SEO.Index.description,
    images: [baseUrl + SEO.Index.image],
    card: "summary_large_image",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <NextTopLoader color="#17FFAC" />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
