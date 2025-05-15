import type { DateRange } from "react-day-picker";

export interface DateChooseProps {
  placeholder: string;
  selected: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
  onCancel: () => void;
}
