export interface DropDownProps {
  placeholder: string;
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  onCancel: () => void;
  className?: string;
}
