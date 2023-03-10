
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

//create a directory if it doesn't exist
const createDir = async (dir) => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

// check if file exists





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


for (let i=0;i<local_files.length;i++){
    let files = local_files.slice(i,i+6);

    try {

        
        const pages = [await browser.newPage(),await browser.newPage(),await browser.newPage(),await browser.newPage(),await browser.newPage()]
        await Promise.all(files.map(async (file,i)=>{
            let file_dir = path.dirname(fileURLToPath(file)).split(path.sep).pop()
            if (fs.existsSync(path.join(__dirname,"screenshots",file_dir,path.basename(fileURLToPath(file)).split(".")[0])+".png")) {
                console.log("File exists")
                await pages[i].close()
                return
            }
            await pages[i].goto(file)
            await scrollPage(pages[i])
            await createDir(path.join(__dirname,"screenshots",file_dir))
            await pages[i].waitForTimeout(1000);
            await pages[i].screenshot({path:path.join(__dirname,"screenshots",file_dir,path.basename(fileURLToPath(file)).split(".")[0])+".png",fullPage:true,captureBeyondViewport:true})
            await pages[i].close()
        }))
        

        // await page.goto(file)
        // await scrollPage(page)
        // let file_dir = path.dirname(fileURLToPath(file)).split(path.sep).pop()
        // await createDir(path.join(__dirname,"screenshots",file_dir))
        // await page.waitForTimeout(1000);
        // await page.screenshot({path:path.join(__dirname,"screenshots",file_dir,path.basename(fileURLToPath(file)).split(".")[0])+".png",fullPage:true,captureBeyondViewport:true})
        // await page.close()
    } catch (error) {
        console.log(error)
    }
}

await browser.close();
// })()