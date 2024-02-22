import { IWritable } from './IWritable';
import { MenuItem } from "./MenuItem";

export class HtmlWriter implements IWritable {
  private _meals: MenuItem[];
  outputFilename: string;
  outputData: string;

  constructor() {
    this._meals = [];
    this.outputFilename = 'menu.html';
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

    this.outputData += `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Menu</title>
        <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5; 
          padding: 20px; 
        }
        
        p {
          font-size: 24px; 
          margin-top: 30px; 
        }

        table {
          width: 100%;
          max-width: 600px; 
          margin-bottom: 20px; 
          background-color: #fff; 
          border-collapse: collapse; 
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
        }

        th, td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ddd; 
        }

        th {
          background-color: #f2f2f2; 
          font-weight: bold; 
        }
    </style>
    </head>
    <body>
    `;
   
    uniqueMealTypes.forEach(type => {
      this.outputData += `<p> ${type} </p>`;
      this.outputData += `<table>`;
      this._meals.forEach(meal => {
        if (meal.mealType === type) {
          this.outputData += `
          <tr>
          <td> ${meal.price} </td>
          <td> ${meal.mealName} </td>
          <td> ${meal.mealQuantity} </td>
          </tr>
          `;
        };
      });
      this.outputData += `</table>`;
      this.outputData += `<br>`;
    });

    this.outputData += `
    </body>
    </html>
    `;
	}
}