import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "倉位試算 - 幣友",
  description: "加密貨幣倉位計算機",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
};

export default RootLayout;
