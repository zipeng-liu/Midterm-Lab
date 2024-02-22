import { IWritable } from './IWritable';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { MenuItem } from './MenuItem';

export class CsvMenuParser {
	private _menu: MenuItem[];
	
	constructor() {
		this._menu = [];
	}

	get menu(): MenuItem[] {
		return this._menu;
	}
  
  public async importData(filename: string): Promise<void> {
		try {
			const filePath = path.join(__dirname, '..', 'data', filename);
			const dataString = await fs.readFile(filePath, 'utf-8');
			const dataArray = dataString.split(os.EOL);
			const dataTable = dataArray.map(row => row.split(','));

			dataTable.forEach(row => {
				let menuItem = new MenuItem(row[0], row[1], row[2], row[3]);
				this._menu.push(menuItem);
			});
		} catch (error) {
			console.error('Error occurred while importing data:', error);
			throw error;
		}
	}

	public async writeMenu(writer: IWritable) {
		try {
			writer.addData(this.menu);
      writer.makeMenu();
		  const outputPath = path.join(__dirname, '..', 'menu', writer.outputFilename);
		  await fs.writeFile(outputPath, writer.outputData);
		} catch (error) {
			console.error('Error occurred while writing menu:', error);
			throw error;
		}
	}
}
