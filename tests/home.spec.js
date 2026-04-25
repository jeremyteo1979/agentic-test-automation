const { test, expect } = require("@playwright/test");

test("homepage loads and supports the first plan interaction", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "$0 today. 0 worry with 5G Unlimited+ Plans." })).toBeVisible();
  await expect(page.getByTestId("mega-menu")).toBeVisible();

  await page.getByTestId("hero-primary-cta").click();
  await expect(page.getByTestId("mobile-plan-card")).toBeVisible();

  await page.getByRole("button", { name: "View mobile options" }).click();
  await expect(page.getByTestId("plan-selection")).toContainText("Mobile selected");
});

test("support search returns a testable local result", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Search support topics").fill("billing");
  await page.getByRole("button", { name: "Search" }).click();
  await expect(page.getByTestId("search-result")).toContainText('Showing Vue local test results for "billing".');
});
