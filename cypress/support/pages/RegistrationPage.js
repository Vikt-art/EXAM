import BasePage from "./BasePage";
import user from "../../fixtures/user.json";
import {findItemByKeyword} from "../helper";

class RegistrationPage extends BasePage {

    visit() {
        cy.log('Open registration form')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
    }

    closeBanner() {
        cy.log('Close Banner')
        return cy.get("[aria-label=\'Close Welcome Banner\']").click();
    }

    getEmailField() {
        cy.log ('Fill email field')
        return cy.get('#emailControl');
    }

    getPasswordField() {
        cy.log ('Fill password field')
        return cy.get('#passwordControl');

    }

    getRepeatPasswordField() {
        cy.log ('Fill repeat password field')
        return cy.get('#repeatPasswordControl');
    }

    getSecurityQuestionField() {
        cy.log ('Open dropdown of security question field')
        return cy.get('[name="securityQuestion"]').click({force: true});
    }

    getSelectQuestionField() {
        cy.log ('Select security question')
        return cy.get('span:contains( Your eldest siblings middle name)').click();
    }

    getAnswerQuestionField() {
        cy.log ('Fill answer field')
        return cy.get("[placeholder ='Answer to your security question']")
    }

    getRegisterButton() {
        cy.log ('Submit registration')
        return cy.get('#registerButton').click();
    }

    getErrorMessageText() {
        cy.log ('Error message should be appeared')
        return cy.get('#emailControl').parents('.mat-form-field-wrapper').find('mat-error');
    }

    getErrorMessageText2() {
        cy.log ('Error message should be appeared')
        return cy.get('#passwordControl').parents('.mat-form-field-wrapper').find('mat-error');
    }

    getErrorMessageText3() {
        cy.log ('Error message should be appeared')
        return cy.get('#repeatPasswordControl').parents('.mat-form-field-wrapper').find('mat-error')
    }
    fillRegistrationFields(useremail, userpassword, answer) {
        cy.log('Fill in registration fields');
        this.getEmailField().type(useremail);
        this.getPasswordField().type(userpassword);
        this.getRepeatPasswordField().type(userpassword);
        this.getSecurityQuestionField();
        this.getSelectQuestionField()
        this.getAnswerQuestionField();
        this.getAnswerQuestionField().type(user.answer);
        this.getRegisterButton().click()


    }
}
export default new RegistrationPage()