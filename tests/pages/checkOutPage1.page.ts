import { Page, Locator } from "@playwright/test";

export default class checkOutPage1 {
    page: Page

    getTitleCheckoutPage1: Locator
    getFirstName: Locator
    getLastName: Locator
    getZipCode: Locator
    getButtonCheckoutContinue: Locator

    constructor(page: Page){
        this.page = page

        this.getTitleCheckoutPage1 = page.getByTestId('title')
        this.getFirstName = page.getByTestId('firstName')
        this.getLastName = page.getByTestId('lastName')
        this.getZipCode = page.getByTestId('postalCode')
        this.getButtonCheckoutContinue = page.getByTestId('continue')

    }

    
}