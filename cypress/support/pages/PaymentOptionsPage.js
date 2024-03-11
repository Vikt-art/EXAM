import BasePage from "./BasePage";

class PaymentOptionsPage extends BasePage {
    getAddNewCardField() {
        return cy.get('mat-panel-title:contains( Add new card )');
    }

    getCardNamefield() {
        return cy.get('input[type="text"]').eq(1);
    }
    getCardNumberField(){
        return cy.get('input[type="number"]').eq(0);
    }
    getExpireMonthField(){
        return cy.get(('select').eq(0).select(2));
    }
    getExpireYearField(){
        return cy.get(('select').eq(1).select('2090'));
    }
    getSubmitButton(){
        return cy.get('span:contains(Submit)');
    }
     getSelectCardIcon(){
        return cy.get('mat-table').find('mat-row').last().find('.mat-cell.cdk-column-Selection').find('input[type="radio"]');
}
    getContinueButton(){
        return cy.get('.mat-button-wrapper').contains('Continue');
    }
}
export default new PaymentOptionsPage()