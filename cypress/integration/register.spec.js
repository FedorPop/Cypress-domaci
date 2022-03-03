/// <reference types="cypress" />
describe("Register test", () => {
    it("visit register page", () => {
        cy.visit("https://gallery-app.vivifyideas.com/register/");
    });
it.only("Click on the register button", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.get('.nav-link').eq(2).click();
});
it.only("Wrong email format", () => {
    cy.visit("/");
    cy.get('#first-name').type('test');
    cy.get('#last-name').type('testic');
    cy.get('#email').type('s@s');
    cy.get('#password').type('asdasdasd123');
    cy.get('#password-confirmation').type('asdasdasd123');
    cy.get('[type="checkbox"]').check();
    cy.get('button').click();
    cy.contains("The email must be a valid email address.").should('be.visible');
});
it.only("Less than 8 characters password", () => {
    cy.visit("/");
    cy.get('#first-name').type('test');
    cy.get('#last-name').type('testic');
    cy.get('#email').type('s@s.com');
    cy.get('#password').type('asd');
    cy.get('#password-confirmation').type('asdasdasd123');
    cy.get('[type="checkbox"]').check();
    cy.get('button').click();
    cy.contains("The password must be at least 8 characters.").should('be.visible');
});
it.only("Wrong password confirmation format", () => {
    cy.visit("/");
    cy.get('#first-name').type('test');
    cy.get('#last-name').type('testic');
    cy.get('#email').type('s@s.com');
    cy.get('#password').type('asdasdasd123');
    cy.get('#password-confirmation').type('asdasdasd12');
    cy.get('[type="checkbox"]').check();
    cy.get('button').click();
    cy.contains("The password confirmation does not match.").should('be.visible');
});
it.only("Terms and conditions checkbox", () => {
    cy.visit("/");
    cy.get('#first-name').type('test');
    cy.get('#last-name').type('testic');
    cy.get('#email').type('s@s.com');
    cy.get('#password').type('asdasdasd123');
    cy.get('#password-confirmation').type('asdasdasd123');
    cy.get('button').click();
    cy.contains("The terms and conditions must be accepted.").should('be.visible');
});
it.only("Email already taken", () => {
    cy.visit("/");
    cy.get('#first-name').type('test');
    cy.get('#last-name').type('testic');
    cy.get('#email').type('mejl@mejl.com');
    cy.get('#password').type('asdasdasd123');
    cy.get('#password-confirmation').type('asdasdasd123');
    cy.get('[type="checkbox"]').check();
    cy.get('button').click();
    cy.contains("The email has already been taken.").should('be.visible');
});
it.only("Invalid password format", () => {
    cy.visit("/");
    cy.get('#first-name').type('test');
    cy.get('#last-name').type('testic');
    cy.get('#email').type('s@s.com');
    cy.get('#password').type('asdasdasd');
    cy.get('#password-confirmation').type('asdasdasd');
    cy.get('[type="checkbox"]').check();
    cy.get('button').click();
    cy.contains("The password format is invalid.").should('be.visible');
});
it.only("Valid registration", () => {
    cy.visit("/");
    cy.get('#first-name').type('test');
    cy.get('#last-name').type('testic');
    cy.get('#email').type('s@s.com');
    cy.get('#password').type('asdasdasd123');
    cy.get('#password-confirmation').type('asdasdasd123');
    cy.get('[type="checkbox"]').check();
    cy.get('button').click();
});
});