import { Page , expect } from '@playwright/test';

export async function openHomePage(page: Page) {
    await page.goto('/');
}