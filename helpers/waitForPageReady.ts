import { Page , expect } from '@playwright/test';

export async function waitForPageReady(page: Page) {
    //await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('.logo')).toBeVisible();
}