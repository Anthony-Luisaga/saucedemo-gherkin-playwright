import { Given } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext } from "@playwright/test";
import { After } from "@cucumber/cucumber";

let browser: Browser;
let context: BrowserContext;

After(async function () {
  if (context) await context.close();
  if (browser) await browser.close();
});

// Shopping and Menu

Given("I am logged in as a Standard User", async function () {
  browser = await chromium.launch({
    headless: true,
  });
  context = await browser.newContext({
    storageState: "tests/steps/support/auth/auth-state.json",
  });
  this.page = await context.newPage();
  await this.page.goto("https://www.saucedemo.com/inventory.html");
});

Given("I am on the inventory page", async function () {
  await this.page.goto("https://www.saucedemo.com/inventory.html");
});

//
