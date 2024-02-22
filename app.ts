import { CsvMenuParser } from "./src/CsvMenuParser";
import { TextWriter } from "./src/TextWriter";
import { HtmlWriter } from "./src/HtmlWriter";

async function makeTextMenu() {
  const csvMenuParser = new CsvMenuParser();
  const textWriter = new TextWriter();
  await csvMenuParser.importData('menu.csv');
  await csvMenuParser.writeMenu(textWriter);
}

makeTextMenu()
  .then(() => { console.log('Text menu created successfully.'); })
  .catch(error => { console.error('Error occurred while creating menu:', error); });


async function makeHtmlMenu() {
  const csvMenuParser = new CsvMenuParser();
  const htmlWriter = new HtmlWriter();
  await csvMenuParser.importData('menu.csv');
  await csvMenuParser.writeMenu(htmlWriter);
}
  
makeHtmlMenu()
  .then(() => { console.log('Text menu created successfully.'); })
  .catch(error => { console.error('Error occurred while creating menu:', error); });
