// components/BackToHomeBtn.tsx
"use client";
import { useRouter } from "nextjs-toploader/app";
import AddBtn from "./AddBtn";

const BackToHomeBtn = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <AddBtn label="回首頁" className="mt-5" onClick={() => router.push("/")} />
  );
};

export default BackToHomeBtn;
