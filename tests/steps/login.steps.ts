import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Page } from "@playwright/test";
import { chromium } from "playwright";
import { After } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "playwright";
import dotenv from "dotenv";

dotenv.config();

let page: Page;
let browser: Browser;
let context: BrowserContext;

After(async () => {
  if (context) {
    await context.close();
  }
  if (browser) {
    await browser.close();
  }
});

Given("I am on the SauceDemo login page", { timeout: 60 * 1000 }, async () => {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");
});

When(
  "I login with the username {string} and password {string}",
  { timeout: 10 * 1000 },
  async (usernamePlaceholder: string, passwordPlaceholder: string) => {
    const username = process.env[usernamePlaceholder]!;
    const password = process.env[passwordPlaceholder]!;

    const usernameInput = page.locator('[data-test="username"]');
    const passwordInput = page.locator('[data-test="password"]');
    const loginButton = page.locator('[data-test="login-button"]');

    await usernameInput.click();
    await usernameInput.fill(username);
    await passwordInput.click();
    await passwordInput.fill(password);
    await loginButton.click();

    if (username === process.env.PERFORMANCE_GLITCH_USER) {
    }
  }
);

When("I click the login button", async () => {
  const loginButton = page.locator('[data-test="login-button"]');
  await loginButton.click();
});

When("I enter the username {string}", async (credentialPlaceholder) => {
  const username = process.env[credentialPlaceholder]!;

  const usernameInput = page.locator('[data-test="username"]');
  const loginButton = page.locator('[data-test="login-button"]');

  await usernameInput.click();
  await usernameInput.fill(username);
});

When("I enter the password {string}", async (passwordPlaceholder) => {
  const password = process.env[passwordPlaceholder]!;

  const passwordInput = page.locator('[data-test="password"]');
  const loginButton = page.locator('[data-test="login-button"]');

  await passwordInput.click();
  await passwordInput.fill(password);
});

Then("I should remain in the login page", async () => {
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});

Then("I should see an error message {string}", async (message: string) => {
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText(message);
});

Then("I should be redirected to the inventory page", async () => {
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

Then("I should see the product list", async () => {
  const productList = page.locator('[data-test="inventory-list"]');
  await expect(productList).toBeVisible();
});
