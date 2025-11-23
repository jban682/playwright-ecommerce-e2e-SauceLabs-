import { expect, test } from '@playwright/test'
import landingPage from './pages/login.pages'
import E2ETest from './pages/E2E-Test.pages'
import inventory from './pages/cart.page'
import checkOutPage1 from './pages/checkOutPage1.page'


test.describe('5 Core E2E Test Scenario', () => {

    let loginPageLocator: landingPage
    let e2eTestLocator: E2ETest
    let productList: inventory
    let clientInfo: checkOutPage1

    test.beforeEach('Accessing the website', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')

        loginPageLocator = new landingPage(page)
        e2eTestLocator = new E2ETest(page)
        productList = new inventory(page)
        clientInfo = new checkOutPage1(page)
    })

    test('Scenario 1: Successful Order Placement (Critical User Flow)', async ({ page }) => {
        //Navigate to the Login Page and log in with the standard_user.
        await loginPageLocator.login('standard_user', 'secret_sauce')

        //Result: Redirected to the Inventory Page.
        await expect(loginPageLocator.getPageTitle).toHaveText('Products')
        //Add two different items (e.g., 'Sauce Labs Backpack' and 'Sauce Labs Bike Light') to the shopping cart.
        await expect(e2eTestLocator.get1stProduct).toHaveText('Sauce Labs Backpack')
        await e2eTestLocator.get1stAddToCartButton.click()

        await expect(e2eTestLocator.get2ndProduct).toHaveText('Sauce Labs Bike Light')
        await e2eTestLocator.get2ndAddToCartButton.click()
        //- Cart icon badge shows '2'.
        await expect(e2eTestLocator.getCartBadge).toHaveText('2')
        //Navigate to the Shopping Cart and click 'Checkout'.
        await e2eTestLocator.getLinkShoppingCart.click()
        await expect(productList.getTitleShoppingCart).toHaveText('Your Cart')

        await productList.getButtonCheckOut.click()
        //- Redirected to the Checkout Step 1 Page.
        await expect(clientInfo.getTitleCheckoutPage1).toHaveText('Checkout: Your Information')
        //Fill out all required personal information (First Name, Last Name, Zip Code) and click 'Continue'.
        await clientInfo.getFirstName.fill('Jean')
        await clientInfo.getLastName.fill('Grey')
        await clientInfo.getZipCode.fill('123456')

        await clientInfo.getButtonCheckoutContinue.click()
        //- Redirected to the Checkout Step 2 (Overview) Page.
        await expect(e2eTestLocator.getCheckoutOverviewPageTitle).toHaveText('Checkout: Overview')
        //Click the 'Finish' button.
        await e2eTestLocator.getCheckoutFinishButton.click()
        //- Redirected to the Checkout Complete Page.
        //Assertion: Verify the success message ("Thank you for your order!") is displayed.
        //- Success message is visible.
        await expect(e2eTestLocator.getCheckoutCompletePagetitle).toHaveText('Checkout: Complete!')
        await expect(e2eTestLocator.getCheckoutSuccessMessage).toHaveText('Thank you for your order!')
        await expect(e2eTestLocator.getCheckoutCompleteText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        await expect(e2eTestLocator.getCheckoutCompleteText).toBeVisible()
        await expect(e2eTestLocator.getBackHomeButton).toBeVisible()
    })

})