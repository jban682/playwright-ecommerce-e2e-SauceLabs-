import { Locator, Page } from "@playwright/test";

export default class E2ETest {
    page: Page
    get1stProduct: Locator
    get1stAddToCartButton: Locator
    get2ndProduct: Locator
    get2ndAddToCartButton: Locator
    getCartBadge: Locator
    getLinkShoppingCart: Locator
    //getCheckoutOverviewPageTitle: Locator
    //getCheckoutFinishButton: Locator
    getCheckoutCompletePagetitle: Locator
    getCheckoutSuccessMessage: Locator
    getCheckoutCompleteText: Locator
    getBackHomeButton: Locator


    constructor(page: Page){
        this.page = page

        //header
        this.getCartBadge = page.getByTestId('shopping-cart-badge')
        this.getLinkShoppingCart = page.getByTestId('shopping-cart-link')

        this.get1stProduct = page.getByTestId('item-4-title-link')
        this.get1stAddToCartButton = page.getByTestId('add-to-cart-sauce-labs-backpack')
        this.get2ndProduct = page.getByTestId('item-0-title-link')
        this.get2ndAddToCartButton = page.getByTestId('add-to-cart-sauce-labs-bike-light')
    

        //Checkout page1
        
        //Checkout Overview
       // this.getCheckoutOverviewPageTitle = page.getByTestId('title')
        //this.getCheckoutFinishButton = page.getByTestId('finish')


        //checkout complete
        this.getCheckoutCompletePagetitle = page.getByTestId('title')
        this.getCheckoutSuccessMessage = page.getByTestId('complete-header')
        this.getCheckoutCompleteText = page.getByTestId('complete-text')
        this.getBackHomeButton = page.getByTestId('back-to-products')
    }
}