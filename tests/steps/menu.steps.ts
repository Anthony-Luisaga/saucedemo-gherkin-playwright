import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I am on the cart page", async function () {
  await this.page.goto("https://www.saucedemo.com/cart.html");
});

When("I click the menu button", async function () {
  await this.page.getByRole("button", { name: "Open Menu" }).click();
});

When("I click the X button", async function () {
  await this.page.getByRole("button", { name: "Close Menu" }).click();
});

When("I click {string} button", async function (menu_item) {
  await this.page
    .locator(".bm-item-list")
    .getByText(menu_item, { exact: true })
    .click();
});

Then("I should see the menu items:", async function (dataTable) {
  const menu = this.page
    .locator("div")
    .filter({ hasText: /^All ItemsAboutLogoutReset App State$/ });
  const menuItems = this.page.locator(".bm-item-list a");

  await expect(menu).toBeVisible();
  await expect(menuItems.first()).toBeVisible();

  const expectedItems: string[] = dataTable
    .hashes()
    .map((row) => row.menu_item);

  const actualItems = await menuItems.allTextContents();

  for (const expected of expectedItems) {
    expect(actualItems).toContain(expected);
  }
});

Then("I should not see the menu", async function () {
  const menu = this.page
    .locator("div")
    .filter({ hasText: /^All ItemsAboutLogoutReset App State$/ });

  await expect(menu).toBeHidden();
});

Then("I should be on the {string} page", async function (expectedPage) {
  switch (expectedPage) {
    case "inventory":
      await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
      break;
    case "about":
      await expect(this.page).toHaveURL("https://saucelabs.com/", {
        timeout: 60 * 1000,
      });
      break;
    case "login":
      await expect(this.page).toHaveURL("https://www.saucedemo.com");
      break;
    default:
      throw new Error(`Unknown expected page: ${expectedPage}`);
  }
});
