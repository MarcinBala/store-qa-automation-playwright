import { test, expect } from '@playwright/test';
import { products } from '../../test-data/products';

test.beforeEach(async ({ page }) => {
    await page.goto(`/index.php?rt=product/product&product_id=${products.bronzer.id}`);
});

test('@smoke product name and price are visible on product page', async ({page}) => {
    const name = page.locator('h1.productname');
    await expect(name).toBeVisible();
    await expect(name).toHaveText(products.bronzer.name);

    const price = page.locator('.productfilneprice');
    await expect(price).toBeVisible();
    await expect(price).not.toHaveText(/\$0\.00/);
})

test('@smoke add to cart button is visible on product page', async ({page}) => {
    await expect(page.getByRole('link', { name: /add to cart/i })).toBeVisible();
})