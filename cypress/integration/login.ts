import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Test add product Sauce Labs Backpack to cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack()
    dashboardPage.addSauceLabsBackpacktoCart() 
})

it('Test logout', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.logout()
})