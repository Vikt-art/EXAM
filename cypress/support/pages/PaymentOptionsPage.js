import BasePage from "./BasePage";

class PaymentOptionsPage extends BasePage {
    getAddNewCardField() {
        cy.log ('Add new card')
        return cy.get('mat-panel-title:contains( Add new card )');
    }

    getCardNameField() {
        return cy.get('input[type="text"]');
    }
    getCardNumberField(){
        cy.log ('Fill card number')
        return cy.get('input[type="number"]').eq(0);
    }
    getExpireMonthField(){
        cy.log ('Fill expire month of card number')
        return cy.get(('select'))
    }
    getExpireYearField(){
        cy.log ('Fill expire year of card number')
        return cy.get(('select'));
    }
    getSubmitButton(){
        cy.log ('Submit card details')
        return cy.get('span:contains(Submit)');
    }
     getSelectCardIcon(){
         cy.log ('Choose last card')
        return cy.get('[role="row"]:last');
}
    getContinueButton(){
        cy.log ('Continue order')
        return cy.get('.mat-button-wrapper').contains('Continue');
    }
}
export default new PaymentOptionsPage()