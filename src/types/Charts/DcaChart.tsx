export interface DcaPoint {
  date: string;
  value: number;
  savings: number;
  benchmark?: number;
  index?: number;
}

export interface DcaChartProps {
  data: DcaPoint[];
}
