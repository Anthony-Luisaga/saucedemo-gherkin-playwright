import { chromium } from "@playwright/test";
import { writeFileSync } from "fs";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const authStatePath = "tests/steps/support/auth/auth-state.json";

  try {
    await page.goto("https://www.saucedemo.com", {
      waitUntil: "networkidle",
      timeout: 60 * 1000,
    });

    await page.locator('[data-test="username"]').waitFor();
    await page
      .locator('[data-test="username"]')
      .fill(process.env.STANDARD_USER);

    await page.locator('[data-test="password"]').waitFor();
    await page.locator('[data-test="password"]').fill(process.env.PASSWORD);

    await page.locator('[data-test="login-button"]').click();

    await page.waitForURL("**/inventory.html", { timeout: 5000 });
    console.log("\nLogin successful!");

    const state = await context.storageState();
    writeFileSync(authStatePath, JSON.stringify(state, null, 2));
    console.log("Auth state saved to", authStatePath, "\n");
  } catch (error) {
    console.error("Error during login:", error);
    await page.screenshot({ path: "screenshot/login-error.png" });
  } finally {
    await browser.close();
  }
})();
