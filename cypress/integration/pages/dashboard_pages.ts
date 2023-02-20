export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
    }

    addSauceLabsBackpacktoCart(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container > a').should('be.visible')
        cy.get('#shopping_cart_container > a').click()
        cy.get('#continue-shopping').should('be.visible')
        cy.get('#checkout').should('be.visible')
    }

    logout(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('#menu_button_container > div > div:nth-child(1) > div').should('be.visible')
        cy.get('#menu_button_container > div > div:nth-child(1) > div').click()
        cy.get('#logout_sidebar_link').should('be.visible')
        cy.get('#logout_sidebar_link').click()
    }
}