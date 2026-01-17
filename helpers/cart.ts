import { Page , expect } from '@playwright/test';

export async function addAnyProductToCart(page: Page) {
    // In a real project, cart setup would be done via backend API.
    await page.goto('/');
    // Ensure page is ready
    await expect(page.locator('.headerstrip')).toBeVisible();

    await page.getByTitle('Add to Cart').first().click();
}