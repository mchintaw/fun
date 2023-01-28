
//  take a screenshot of local html pages using puppeteer
import puppeteer from "puppeteer"
import path from 'path';
import { fileURLToPath,pathToFileURL } from 'url';
import fs from 'fs'

const url = 'http://localhost:3000'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//get 4 lines from a file
const getLines = async (file) => {
    const data = await fs.promises.readFile(file, 'utf8')
    const lines = data.split('\n')
    
    return lines.map(line=>pathToFileURL(line))
}



// (async () => {
//     const browser = await puppeteer.launch()

//     const page = await browser.newPage()
//     await page.goto(url)
//     await scrollPage(page)
//     await page.waitForTimeout(1000);
//     await page.screenshot({path:"1.png",fullPage:true,captureBeyondViewport:true})
//     await page.close()

//     await browser.close();
// })()

// (async () => {
//     const browser = await puppeteer.launch()

//

// (async () => {
const scrollPage = async (page) => {
    await page.evaluate(() => {
    return new Promise((resolve, reject) => {
        let interval;
        const reachedBottom = () =>
        document.scrollingElement.scrollTop + window.innerHeight >=
        document.scrollingElement.scrollHeight;
        const scroll = async () => {
        document.scrollingElement.scrollTop += window.innerHeight / 2;
        if (reachedBottom()) {
            clearInterval(interval);
            document.scrollingElement.scrollTop = 0;
            resolve();
        }
        };
        interval = setInterval(scroll, 100);
    });
    });
};
const local_files = await getLines(path.join(__dirname,'demo/list'))
const browser = await puppeteer.launch()

for (let file of local_files) {
    const page = await browser.newPage()
    await page.goto(file)
    await scrollPage(page)
    await page.waitForTimeout(1000);
    await page.screenshot({path:path.join(__dirname,"screenshots",path.basename(fileURLToPath(file)).split(".")[1]),fullPage:true,captureBeyondViewport:true})
    await page.close()
}

await browser.close();
// })()