import { Locator, Page } from "@playwright/test";

export default class E2ETest {
    page: Page
    get1stProduct: Locator
    get1stAddToCartButton: Locator
    get2ndProduct: Locator
    get2ndAddToCartButton: Locator
    getCartBadge: Locator
    getShoppingCart: Locator
    getShoppingCartTitle: Locator
    getCheckOutButton: Locator
    getCheckoutPage1Title: Locator
    getFirstNameClient: Locator
    getLastNameClient: Locator
    getZipCodeClient: Locator
    getCheckoutContinueButton: Locator
    getCheckoutOverviewPageTitle: Locator
    getCheckoutFinishButton: Locator
    getCheckoutCompletePagetitle: Locator
    getCheckoutSuccessMessage: Locator
    getCheckoutCompleteText: Locator
    getBackHomeButton: Locator


    constructor(page: Page){
        this.page = page

        this.get1stProduct = page.getByTestId('item-4-title-link')
        this.get1stAddToCartButton = page.getByTestId('add-to-cart-sauce-labs-backpack')
        this.get2ndProduct = page.getByTestId('item-0-title-link')
        this.get2ndAddToCartButton = page.getByTestId('add-to-cart-sauce-labs-bike-light')
        this.getCartBadge = page.getByTestId('shopping-cart-badge')
        this.getShoppingCart = page.getByTestId('shopping-cart-link')
        this.getShoppingCartTitle = page.getByTestId('title')
        this.getCheckOutButton = page.getByTestId('checkout')

        //Checkout page1
        this.getCheckoutPage1Title = page.getByTestId('title')
        this.getFirstNameClient = page.getByTestId('firstName')
        this.getLastNameClient = page.getByTestId('lastName')
        this.getZipCodeClient = page.getByTestId('postalCode')
        this.getCheckoutContinueButton = page.getByTestId('continue')

        //Checkout Overview
        this.getCheckoutOverviewPageTitle = page.getByTestId('title')
        this.getCheckoutFinishButton = page.getByTestId('finish')


        //checkout complete
        this.getCheckoutCompletePagetitle = page.getByTestId('title')
        this.getCheckoutSuccessMessage = page.getByTestId('complete-header')
        this.getCheckoutCompleteText = page.getByTestId('complete-text')
        this.getBackHomeButton = page.getByTestId('back-to-products')
    }
}