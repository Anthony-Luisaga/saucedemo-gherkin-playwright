import { chromium } from "@playwright/test";
import { writeFileSync } from "fs";

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto("https://www.saucedemo.com", {
      waitUntil: "networkidle",
      timeout: 60 * 1000,
    });

    await page.locator('[data-test="username"]').waitFor();
    await page.locator('[data-test="username"]').fill("standard_user");

    await page.locator('[data-test="password"]').waitFor();
    await page.locator('[data-test="password"]').fill("secret_sauce");

    await page.locator('[data-test="login-button"]').click();

    await page.waitForURL("**/inventory.html", { timeout: 5000 });
    console.log("Login successful!");

    const state = await context.storageState();
    writeFileSync(
      "tests/support/auth/auth-state.json",
      JSON.stringify(state, null, 2)
    );
    console.log("Auth state saved to tests/support/auth/auth-state.json");
  } catch (error) {
    console.error("Error during login:", error);
    await page.screenshot({ path: "login-error.png" });
  } finally {
    await browser.close();
  }
})();
