import BasePage from "./BasePage";

class PaymentOptionsPage extends BasePage {
    getAddNewCardField() {
        return cy.get('mat-panel-title:contains( Add new card )');
    }

    getCardNameField() {
        return cy.get('input[type="text"]');
    }
    getCardNumberField(){
        return cy.get('input[type="number"]').eq(0);
    }
    getExpireMonthField(){
        return cy.get(('select'))
    }
    getExpireYearField(){
        return cy.get(('select'));
    }
    getSubmitButton(){
        return cy.get('span:contains(Submit)');
    }
     getSelectCardIcon(){
        return cy.get('[role="row"]:last');
}
    getContinueButton(){
        return cy.get('.mat-button-wrapper').contains('Continue');
    }
}
export default new PaymentOptionsPage()