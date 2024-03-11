import user from '../fixtures/user.json'

import loginPage from "../support/pages/LoginPage";

describe('Authorization positive scenarios', () => {
    it('Authorization', () => {
        loginPage.visit()
        loginPage.closeBanner()
        loginPage.fillLoginFields(user.email, user.password)

    });

    describe('Authorization negative scenarios', () => {
        it('Authorization with invalid email', () => {
            loginPage.visit()
            loginPage.closeBanner()
            loginPage.fillLoginFields(user.invalidEmail, user.password)
            loginPage.getErrorMessageText().should("contain", "Invalid email or password")

        });
        it('Authorization with invalid password', () => {
            loginPage.visit()
            loginPage.closeBanner()
            loginPage.fillLoginFields(user.email, user.invalidPassword)
            loginPage.getErrorMessageText().should("contain", "Invalid email or password")
        });
    });

// it.only('Feed Back', () => {
//     cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/contact');
//     loginPage.closeBanner()
//
//     cy.get('[data-placeholder="What did you like or dislike?"]').type('ccccc')
//
//     cy.get('mat-slider#rating[aria-valuenow="5"]')
//     cy.get('[data-placeholder="Please enter the result of the CAPTCHA."]').type(5)
});