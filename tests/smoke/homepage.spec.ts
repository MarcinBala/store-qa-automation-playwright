import { test, expect } from '@playwright/test';
import { openHomePage } from '../../helpers/navigation';
import { categories } from '../../test-data/categories';

test('@smoke homepage loads', async ({ page }) => {
    await openHomePage(page);
    await expect(page.locator('.headerstrip')).toBeVisible();
});

test('@smoke user can open category page from homepage', async ({page}) => {
    await openHomePage(page);
    const categoryLink = page.getByRole('link', { name: categories.appeal.name });
    await expect(categoryLink).toBeVisible();
    await categoryLink.click();

    await expect(page).toHaveURL(/rt=product\/category/);

    await expect(page.locator('.contentpanel')).toBeVisible();
    await expect(page.locator('.thumbnail').first()).toBeVisible();
});


test('@smoke user can open products page from homepage', async ({ page }) => {
    await openHomePage(page);
    const productLink = page.locator('.thumbnail').first();
    await expect(productLink).toBeVisible();
    await productLink.click();

    const addToCart = page.getByRole('link', { name: /add to cart/i }).first();
    await expect(addToCart).toBeVisible();
});