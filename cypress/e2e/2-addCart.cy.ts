import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com'

// describe('Test add cart kasirAja', () => {
//     it('Login first', function () {
//         cy.login('standard_user', 'secret_sauce');
//     })

describe('Test add cart Sauce Demo', () => {
    it('Open Sauce labs product backpack page', () => {
        loginPage.login(URL, 'standard_user', 'secret_sauce')
        loginPage.assertLogin()
        dashboardPage.sauceLabsBackpack()
    })

    it('Test add product Sauce Labs Backpack to cart', () => {
        loginPage.login(URL, 'standard_user', 'secret_sauce')
        loginPage.assertLogin()
        dashboardPage.sauceLabsBackpack()
        dashboardPage.addSauceLabsBackpacktoCart()
    })
})