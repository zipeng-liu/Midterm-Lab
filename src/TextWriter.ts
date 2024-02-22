import { IWritable } from './IWritable';
import { MenuItem } from "./MenuItem";
import os from 'node:os';

export class TextWriter implements IWritable {
  private _meals: MenuItem[];
  outputFilename: string;
  outputData: string;

  constructor() {
    this._meals = [];
    this.outputFilename = 'menu.txt';
    this.outputData = '';
  }

  addData(value: MenuItem[]): void {
    this._meals = value;
  }

  makeMenu(): void {
    const uniqueMealTypes: string[] = [];
    this._meals.forEach(meal => {
      if (!uniqueMealTypes.includes(meal.mealType)) {
        uniqueMealTypes.push(meal.mealType);
      }
    });

    uniqueMealTypes.forEach(type => {
      this.outputData += `* ${type} * ${os.EOL}`;
      this._meals.forEach(meal => {
        if (meal.mealType === type) {
          this.outputData += `${meal.price} ${meal.mealName}, ${meal.mealQuantity}${os.EOL}`;
        };
      });
      this.outputData += `${os.EOL}`
    });
	}


}