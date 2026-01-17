import { test, expect } from '@playwright/test';
import { openHomePage } from '../../helpers/navigation';
import { addAnyProductToCart } from '../../helpers/cart';

test('@smoke user can access shopping cart', async ({ page }) => {
    await openHomePage(page);

    const cart = page.locator('#main_menu_top').getByRole('link', { name: /cart/i } );
    await expect(cart).toBeVisible();
    await cart.click();

    await expect(page).toHaveURL(/rt=checkout\/cart/);
    await expect(page.getByText(/your shopping cart is empty/i)).toBeVisible();
});

test('@smoke checkout requires login for unauthenticated user', async ({ page }) => {
    await addAnyProductToCart(page);

    const cartButton = page.locator('#main_menu_top').getByRole('link', { name: /cart/i } );
    await expect(cartButton).toBeVisible();
    await cartButton.click();

    const checkoutButton = page.locator('#cart_checkout1');
    await expect(checkoutButton).toBeVisible();
    await checkoutButton.click();

    await expect(page).toHaveURL(/rt=account\/login/);
});