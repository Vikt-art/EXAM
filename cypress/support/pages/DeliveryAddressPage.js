import BasePage from "./BasePage";

class DeliveryAddressPage extends BasePage {
getChooseDeliverySpeedField(){
    cy.log ('Choose delivery speed field')
    return cy.get ('mat-row[role="row"]').last()
}
getContinueButton(){
    cy.log ('Continue order')
    return cy.get('mat-icon:contains( navigate_next )');
}

}
export default new DeliveryAddressPage()