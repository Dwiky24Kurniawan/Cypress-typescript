import { LoginPage } from "./pages/login_pages"
import { DashboardPage } from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com'

describe('Test Login Sauce Demo', () => {
    it('success login with valid credential', () => {
        loginPage.login(URL, 'standard_user', 'secret_sauce')
        loginPage.assertLogin()
    })

    it('cannot login with invalid credential', () => {
        loginPage.login(URL, 'standard_user', 'invalidPass')
        loginPage.assertLoginFail()
    })
})