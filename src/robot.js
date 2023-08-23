import { launch } from "puppeteer";
import { config } from "dotenv";

config();

export async function robot() {
  const browser = await launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(process.env.PAGE, {
    waitUntil: "networkidle2",
  });

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
  );

  await page.locator("#user_name").fill(process.env.LOGIN);
  await page.locator("#user_password").fill(process.env.PASS);
  await page.locator("#sysverb_login").click();

  await page.waitForNavigation({ waitUntil: "networkidle2" });

  await browser.close();
}
