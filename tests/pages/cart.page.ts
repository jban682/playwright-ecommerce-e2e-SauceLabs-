import { Locator, Page } from "@playwright/test";
import { LoadFnOutput } from "module";

export default class inventory {
    page: Page
    getTitleShoppingCart: Locator
    getLabelQTY: Locator
    getLabelDescription: Locator
    getProductQTY: Locator
    getLinkProduct: Locator
    getProductName: Locator
    getProductDescription: Locator
    getProductPrice: Locator
    getButtonRemove: Locator


    getButtonContinueShopping: Locator
    getBackImage: Locator
    getButtonCheckOut: Locator


    constructor(page: Page) {
        this.page = page

        this.getTitleShoppingCart = page.getByTestId('title')
        this.getLabelQTY = page.getByTestId('cart-quantity-label')
        this.getLabelDescription = page.getByTestId('cart-desc-label')

        this.getProductQTY = page.getByTestId('item-quantity')
        this.getLinkProduct = page.getByTestId('item-4-title-link')
        this.getProductName = page.getByTestId('inventory-item-name')
        this.getProductDescription = page.getByTestId('')
        this.getProductPrice = page.getByTestId('')
        this.getButtonRemove = page.getByTestId('remove-sauce-labs-backpack')


        this.getButtonContinueShopping = page.getByTestId('continue-shopping')
        this.getBackImage = page.locator('.back-image')
        this.getButtonCheckOut = page.getByTestId('checkout')

        /*addedProductToCart = async (prodQTY: Number, prodName: String, prodDescription: String, productPrice: String) => {
            await expect(this.getProductQTY).toHaveText()
        }*/

        /*async addProductToCart(productName: string) {
            // This is a powerful, concise locator based on the item text
            const locator = this.page.locator(`.inventory_item:has-text("${productName}")`)
                .getByRole('button', { name: 'Add to cart' });
            await locator.click();
        }*/

    }

}