import { expect, Locator, test } from "@playwright/test";
import landingPage from "./pages/login.pages";


test.describe('Landing/Login Page test Scenarios', () => {

    let loginPageLocator: landingPage

    test.beforeEach('', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')

        loginPageLocator = new landingPage(page)
    })

    test('[TC001]: Verify the landing page', async ({ page }) => {
        await expect(loginPageLocator.loginLogo).toBeVisible()
        await expect(loginPageLocator.loginLogo).toHaveText('Swag Labs')

        await expect(loginPageLocator.getUsernameField).toBeVisible()
        await expect(loginPageLocator.getPasswordField).toBeVisible()
    })

    test('[TC002: Successful login]', async ({ page }) => {
        await expect(loginPageLocator.getUsernameField).toBeVisible()
        await expect(loginPageLocator.getPasswordField).toBeVisible()

        await loginPageLocator.login('standard_user', 'secret_sauce')

        await expect(loginPageLocator.getPageTitle).toBeVisible()
        await expect(loginPageLocator.getPageTitle).toHaveText('Products')
    })
})