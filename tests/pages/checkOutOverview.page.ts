import { Locator, Page } from "@playwright/test";

export default class checkOutOverview {
    page: Page
    getCheckoutOverviewPageTitle: Locator
    getButtonCheckoutFinish: Locator
    getLabelQTY: Locator
    getLabelDescription: Locator
    getItemQnty: Locator
    getProductName: Locator
    getProductDesc: Locator
    getProductPrice: Locator
    getLabelPaymentInfo: Locator
    getValuePaymentInfo: Locator
    getLabelShippingInfo: Locator
    getValueShippingInfo: Locator
    getLabelTotalPrice: Locator
    getPriceTotal: Locator
    getLabelTax: Locator
    getTotal: Locator
    getButtonCancel: Locator


    constructor(page: Page) {
        this.page = page
        this.getCheckoutOverviewPageTitle = page.getByTestId('title')
        this.getLabelQTY = page.getByTestId('cart-quantity-label')
        this.getLabelDescription = page.getByTestId('cart-desc-label')
        this.getItemQnty = page.getByTestId('item-quantity')
        this.getProductName = page.getByTestId('inventory-item-name')
        this.getProductDesc = page.getByTestId('inventory-item-desc')
        this.getProductPrice = page.getByTestId('inventory-item-price')

        //payment info
        this.getLabelPaymentInfo = page.getByTestId('payment-info-label') //Payment Information:
        this.getValuePaymentInfo = page.getByTestId('payment-info-value') //SauceCard #31337
        this.getLabelShippingInfo = page.getByTestId('shipping-info-label') //Shipping Information:
        this.getValueShippingInfo = page.getByTestId('shipping-info-value') //Free Pony Express Delivery!
        this.getLabelTotalPrice = page.getByTestId('total-info-label')
        this.getPriceTotal = page.getByTestId('subtotal-label')
        this.getLabelTax = page.getByTestId('tax-label')
        this.getTotal = page.getByTestId('total-label')

        //cart footer buttons
        this.getButtonCancel = page.getByTestId('cancel')
        this.getButtonCheckoutFinish = page.getByTestId('finish')

    }

    async productInfo(productName: string, productDesc: string, productPrice: string) {
        await this.getProductName.fill(productName)
        await this.getProductDesc.fill(productDesc)
        await this.getProductPrice.fill(productPrice)
        }
}