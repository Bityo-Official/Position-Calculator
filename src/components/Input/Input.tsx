"use client";
import type { InputProps } from "@/types/Input/Input";

const Input = (props: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e);
  };

  return (
    <input
      type={props.type || "text"}
      name={props.name}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      onChange={handleChange}
      className={`text-sm font-normal leading-[22px] border-[1px] border-neutral-200 rounded-sm px-3 py-[9px] focus:outline-none focus:border-[#0E0E0E] focus:ring-[1px] ${props.className} ${props.value ? "text-[#1A1A1A]" : "text-neutral-400"}`}
    />
  );
};

export default Input;
