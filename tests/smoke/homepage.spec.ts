import { test, expect } from '@playwright/test';
import { waitForPageReady } from '../../helpers/waitForPageReady';

test.beforeEach(async ({page}) => {
    await page.goto('/');
    await waitForPageReady(page);
});

test('@smoke homepage loads', async ({ page }) => {
    await expect(page.locator('.logo')).toBeVisible();
});

test('@smoke user can open products page from homepage', async ({ page }) => {
    await page.locator('.thumbnail').first().click();

    const addToCart = page.getByRole('link', { name: /add to cart/i }).first();
    await expect(addToCart).toBeVisible();
});

test('@smoke user can add product to cart', async ({ page }) => {
    await page.getByTitle('Add to Cart').first().click();

    const cartCounter = page
        .locator('a')
        .filter({ hasText: /[1-9]\d*\s*ITEMS?\b/i });
    
    await expect(cartCounter).toHaveCount(1);
});