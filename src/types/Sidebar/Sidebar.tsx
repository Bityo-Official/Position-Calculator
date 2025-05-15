import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SidebarItem {
  name: string;
  icon: IconProp;
  path: string;
  disabled?: boolean;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  // toggleSidebar: () => void;
  items: SidebarItem[];
}
