Cypress.Commands.add('login', (username: string, password: string) => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').clear().type(username);
    cy.get('#password').clear().type(password);
    cy.get('#login-button').click();
    cy.location('pathname').should('eq', '/inventory.html');
})