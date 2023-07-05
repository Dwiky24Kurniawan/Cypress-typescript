export class DashboardPage{
    link_SauceLabsBackpack = '#item_4_title_link'
    link_SauceLabsBikeLight = '#item_0_title_link'
    link_SauceLabsBoltTShirt = '#item_1_title_link'
    link_Cart = '.shopping_cart_link'
    link_AddedToCart = 'span[class="shopping_cart_badge"]'
    txt_fisrtname = '#first-name'
    txt_lastname = '#last-name'
    txt_postalcode = '#postal-code'
    btn_checkout = '#checkout' 
    btn_continue = '#continue'
    btn_finish = '#finish'

    inputFirstname(firstname: string){
        cy.get(this.txt_fisrtname).type(firstname)
    }

    inputLastname(lastname: string){
        cy.get(this.txt_lastname).type(lastname)
    }

    inputPostalcode(postalcode: string){
        cy.get(this.txt_postalcode).type(postalcode)
    }

    clickCheckout(){
        cy.get(this.btn_checkout).click()
    }

    clickContinue(){
        cy.get(this.btn_continue).click()
    }

    clickFinish(){
        cy.get(this.btn_finish).click()
    }

    add_SauceLabsBackpack_toCart(){
        cy.get(this.link_SauceLabsBackpack).should('be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').should('be.visible')
    }

    add_SauceLabsBikeLight_toCart(){
        cy.get(this.link_SauceLabsBikeLight).should('be.visible')
        cy.get('#add-to-cart-sauce-labs-bike-light').should('be.visible')
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#remove-sauce-labs-bike-light').should('be.visible')
    }

    add_SauceLabsBoltTShirt_toCart(){
        cy.get(this.link_SauceLabsBoltTShirt).should('be.visible')
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').should('be.visible')
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('#remove-sauce-labs-bolt-t-shirt').should('be.visible')
    }

    assert_addedToCart(){
        cy.get(this.link_AddedToCart).should('exist')
        cy.get(this.link_AddedToCart).should('be.visible')
    }

    Cart(){
        cy.get(this.link_Cart).should('exist')
        cy.get(this.link_Cart).should('be.visible')
        cy.get(this.link_Cart).click()
    }

    openCart(){
        cy.get(this.link_Cart).click()
    }

    assert_openCart(){
        cy.get('div[class="cart_list"]').should('exist')
        cy.get('div[class="cart_list"]').should('be.visible')
        cy.get(this.btn_checkout).should('be.visible')
    }

    formCheckout(firstname : string, lastname : string, postalcode : string){
        this.inputFirstname(firstname)
        this.inputLastname(lastname)
        this.inputPostalcode(postalcode)
    }

    assert_formCheckout_Fail(){
        cy.get('.error-message-container.error').should('be.visible')
    }

    assert_Checkout_Overview(){
        cy.get('div[class="cart_list"]').should('exist')
        cy.get('div[class="cart_list"]').should('be.visible')
        cy.get('div[class="summary_info"]').should('exist')
        cy.get('div[class="summary_info"]').should('be.visible')
    }

    assert_finishCheckout(){
        cy.get('.complete-header').should('have.text','Thank you for your order!')
    }
}