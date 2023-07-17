import {LoginPage} from "../POM/login_pages"
import {DashboardPage} from "../POM/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com'

describe('Test Suite Sauce Demo - Add Product to Cart', () => {
    it('TC_003 - Positive Test - Add products to cart', () => {
        loginPage.login(URL, 'standard_user', 'secret_sauce')        
        dashboardPage.add_SauceLabsBackpack_toCart()
        dashboardPage.add_SauceLabsBikeLight_toCart()
        dashboardPage.add_SauceLabsBoltTShirt_toCart()
        dashboardPage.assert_addedToCart()
        dashboardPage.openCart()
        dashboardPage.assert_openCart()
    })
})