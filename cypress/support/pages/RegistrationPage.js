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

        return cy.get('#emailControl');
    }

    getPasswordField() {
        return cy.get('#passwordControl');

    }
    getRepeatPasswordField() {
        return cy.get('#repeatPasswordControl');
    }
    getSecurityQuestionField() {
        return cy.get('[name="securityQuestion"]').click({force: true});
    }
    getSelectQuestionField() {
        return cy.get('span:contains( Your eldest siblings middle name)').click();
    }
    getAnswerQuestionField() {
        return cy.get("[placeholder ='Answer to your security question']")
    }

    getRegisterButton() {
        return cy.get('#registerButton').click();
    }

    getErrorMessageText(){
        return cy.get ('#emailControl').parents('.mat-form-field-wrapper').find('mat-error');
    }

    getErrorMessageText2(){
        return cy.get('#passwordControl').parents('.mat-form-field-wrapper').find('mat-error');
    }

    getErrorMessageText3(){
        return cy.get ('#repeatPasswordControl').parents('.mat-form-field-wrapper').find('mat-error')
    }

    fillRegistrationField(email, password){
        cy.log('Fill in registration fields');
        this.getEmailField().type('viktoriya1@gmail.com');
        this.getPasswordField().type(password);
        this.getRepeatPasswordField().type(password);
        this.getSecurityQuestionField();
        this.getSelectQuestionField();
        this.getAnswerQuestionField().type('test');
        this.getRegisterButton()
    }
}
export default new RegistrationPage()