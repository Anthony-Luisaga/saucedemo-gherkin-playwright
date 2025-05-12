import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I have added {string} to the cart", async function (item) {
  const itemLocator = this.page
    .locator(".inventory_item")
    .filter({ hasText: item });
  const addButton = itemLocator.getByRole("button", { name: /add to cart/i });
  const removeButton = itemLocator.getByRole("button", { name: /remove/i });

  // Try to add only if not already in cart
  if (await addButton.isVisible().catch(() => false)) {
    await addButton.click();
    await expect(removeButton).toBeVisible();
  } else if (await removeButton.isVisible().catch(() => false)) {
    // Already in cart, nothing to do
  } else {
    throw new Error(`Could not find add/remove button for item: ${item}`);
  }
});

When("I click the cart button", async function () {
  await this.page.locator('[data-test="shopping-cart-link"]').click();
});

When("I click Add to cart button on {string}", async function (item) {
  await this.page
    .locator(".inventory_item")
    .filter({ hasText: item })
    .getByRole("button", { name: /add to cart/i })
    .click();
});

When(
  "I click Add to cart button on multiple items:",
  async function (dataTable) {
    const items = dataTable.rows().map((row) => row[0]);
    for (const item of items) {
      await this.page
        .locator(".inventory_item")
        .filter({ hasText: item })
        .getByRole("button", { name: /add to cart/i })
        .click();
    }
  }
);

When("I click Remove button on {string}", async function (remove) {
  await this.page
    .locator(".inventory_item")
    .filter({ hasText: remove })
    .getByRole("button", { name: /Remove/i })
    .click();
});

Then("I should be on the cart page", async function () {
  await expect(this.page.url()).toBe("https://www.saucedemo.com/cart.html");
});

Then("I should see {string} in the cart", async function (item) {
  const cartItem = this.page.locator(".cart_item").filter({ hasText: item });
  await expect(cartItem).toBeVisible();
});

Then(
  "I should see the selected items in the cart:",
  async function (dataTable) {
    const items = dataTable.rows().map((row) => row[0]);

    for (const item of items) {
      const cartItem = this.page
        .locator(".cart_item")
        .filter({ hasText: item });
      await expect(cartItem).toBeVisible();
    }
  }
);

Then(
  "I should not see the following items in the cart:",
  async function (dataTable) {
    const items = dataTable.rows().map((row) => row[0]);
    for (const item of items) {
      const cartItem = this.page
        .locator(".cart_item")
        .filter({ hasText: item });
      await expect(cartItem).toBeHidden();
    }
  }
);
