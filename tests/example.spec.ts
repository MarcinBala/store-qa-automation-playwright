import { test, expect } from '@playwright/test';

test.describe('example.com - basic checks', () => {
  test('homepage has correct title', async ({ page }) => {
    // Act
    await page.goto('https://example.com/');

    // Assert
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('homepage has correct URL', async ({ page }) => {
    // Act
    await page.goto('https://example.com/');

    // Assert
    await expect(page).toHaveURL('https://example.com/');
  });

  test('main heading is visible and has correct text', async ({ page }) => {
    // Arrange
    await page.goto('https://example.com/');

    // Act
    const heading = page.getByRole('heading', { level: 1 });

    // Assert
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Example Domain');
  });

  test('page contains expected description text', async ({ page }) => {
    // Arrange
    await page.goto('https://example.com/');

    // Act
    const description = page.locator('p'); // pierwsze <p> na stronie

    // Assert
    await expect(description).toContainText('This domain is for use in illustrative examples');
  });

  test('More information link is visible and points to IANA', async ({ page }) => {
    // Arrange
    await page.goto('https://example.com/');

    // Act
    const moreInfoLink = page.getByRole('link', { name: 'More information...' });

    // Assert
    await expect(moreInfoLink).toBeVisible();
    await expect(moreInfoLink).toHaveAttribute('href', /iana\.org/);
  });

  test('clicking "More information..." navigates away from example.com', async ({ page }) => {
    // Arrange
    await page.goto('https://example.com/');
    const moreInfoLink = page.getByRole('link', { name: 'More information...' });

    // Act
    await moreInfoLink.click();

    // Assert
    // Po kliknięciu URL zmienia się na domenę IANA (może być http/https i różne ścieżki)
    await expect(page).toHaveURL(/iana\.org/);
  });
});
