import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When("I click the cart button", async function () {
  await this.page.locator('[data-test="shopping-cart-link"]').click();
});

Then("I should be on the cart page", async function () {
  await expect(this.page.url()).toBe("https://www.saucedemo.com/cart.html");
});
