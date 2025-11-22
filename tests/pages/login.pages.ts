import { Locator, Page } from "@playwright/test";

export default class landingPage {
    page: Page
    loginLogo: Locator
    getUsernameField: Locator
    getPasswordField: Locator
    getLoginButton: Locator
    getPageTitle: Locator

    constructor(page: Page){
        this.page = page

        this.loginLogo = page.locator('.login_logo')
        this.getUsernameField = page.getByTestId('username')
        this.getPasswordField = page.getByTestId('password')
        this.getLoginButton = page.getByTestId('login-button')

        this.getPageTitle = page.getByTestId('title')
    }

    login = async  (username: string, password: string) => {
        await this.getUsernameField.fill(username)
        await this.getPasswordField.fill(password)
        await this.getLoginButton.click()
    }
}