"use client";
import type { SidebarProps } from "@/types/Sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import Image from "next/image";
import React from "react";
// import icon from "@/images/icon_dark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = (props: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform ${
        props.isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#F3F7FA]">
        {/* <Image
          src={icon}
          alt="login"
          width={100}
          height={100}
          className="object-cover w-40 mb-10"
          priority
          loading="eager"
        /> */}

        <ul className="space-y-2 font-medium">
          {props.items.map((item) => {
            const isActive = item.path === pathname;
            return (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => {
                    props.onClose();
                    router.push(item.path);
                  }}
                  disabled={item.disabled}
                  className={`flex items-center p-2 rounded-lg group w-full ${
                    isActive ? "bg-black/5" : "text-gray-900 hover:bg-black/10"
                  }
                  ${item.disabled ? "cursor-not-allowed hover:bg-gray-200/30" : ""}
                  `}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`w-5 h-5 ${item.disabled ? "!text-gray-400" : "text-neutral-700"}`}
                  />
                  {/* <Image
                    src={item.icon}
                    alt="login"
                    width={10}
                    height={10}
                    className="w-5 h-5"
                    priority
                    loading="eager"
                  /> */}
                  <span
                    className={`ms-3 font-medium text-base leading-6 ${item.disabled ? "!text-gray-400" : "text-neutral-700"}`}
                  >
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
