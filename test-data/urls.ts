export const urls = {
  productPage: (productId: string) =>
    `/index.php?rt=product/product&product_id=${productId}`,

  categoryPage: (path: string) =>
    `/index.php?rt=product/category&path=${path}`,

  cartPage: '/index.php?rt=checkout/cart',

  loginPage: '/index.php?rt=account/login',
};