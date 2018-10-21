let LoveIsComic_HTMLTemplate = (
    url
) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
           <title>Love Is Comic</title>
        </head>
        <body>
          <img src="${url}"></img>
        </body>
      </html>`;
}

 
/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
 
exports.sendComic = (req, res) => {
  
const puppeteer = require('puppeteer');

function run () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch({args: ['--no-sandbox']});
            const page = await browser.newPage();
            await page.goto("https://loveiscomix.com/random");
            let imageurl = await page.evaluate(() => {
                let item = document.querySelector('#primary > main > article > div > div.cellcomic > a > img');
                return 'https://loveiscomix.com/' + item.getAttribute('src');
            })
            browser.close();
            return resolve(imageurl);
        } catch (e) {
            return reject(e);
        }
    })
}

run()
.then(url => {
  console.log("Random LoveIs Comic from the following url: " + url);
  res.set('Content-Type', 'text/html');
  res.status(200).send(LoveIsComic_HTMLTemplate(url));
})
.catch(err => {
    console.error(err);
    res.status(500).send("An Error occured" + err);  
  })
  
};
