import { MenuItem } from "./MenuItem";

export interface IWritable {
  outputFilename: string;
  outputData: string;
  addData(value: MenuItem[]): void;
  makeMenu(): void;
}