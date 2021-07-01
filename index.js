const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // await page.goto("http://localhost:3000/login");
    await page.goto("https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
    //Username
    await page.waitForSelector('#identifierId');
    await page.type("#identifierId", "n140995@rguktn.ac.in");
    await page.click("VfPpkd-vQzf8d");
    //Password
    await page.waitForSelector('Xb9hP.input');
    await page.type('Xb9hP.input', "Jenny@bib11");
    await page.click("VfPpkd-vQzf8d");
})