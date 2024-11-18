export interface Seat {
  id: string;
  row: string;
  number: number;
  status: "available" | "occupied" | "selected";
}
