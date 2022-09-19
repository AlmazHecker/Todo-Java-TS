import { StrOrNum } from "./general";

export interface TodoItem {
  id: Partial<number>;
  content: string;
  createdAt: string;
  updatedAt: string;
  isDone: boolean;
}
