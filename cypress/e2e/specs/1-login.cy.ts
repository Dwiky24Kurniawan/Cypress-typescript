import { LoginPage } from "../POM/login_pages"

let loginPage = new LoginPage()
const URL = 'https://www.saucedemo.com'

describe('Test Suite Sauce Demo - Login', () => {
    it('TC_001 - Positive Test - Login with valid credential', () => {
        loginPage.login(URL, 'standard_user', 'secret_sauce')
        loginPage.assertLogin()
    })

    it('TC_002 - Negative Test - Login with invalid credential', () => {
        loginPage.login(URL, 'standard_user', 'invalidPass')
        loginPage.assertLoginFail()
    })
})