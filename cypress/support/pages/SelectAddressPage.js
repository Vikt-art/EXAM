import BasePage from "./BasePage";

class SelectAddressPage extends BasePage {
    getSelectAddressField(){
        return cy.get ('mat-row[role="row"]').last()
    }
    getContinueField (){
        return cy.get('[aria-label="Proceed to payment selection"]')
    }
}
export default new SelectAddressPage()