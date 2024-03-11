import BasePage from "./BasePage";

class DeliveryAddressPage extends BasePage {
getChooseDeliverySpeedField(){
    return cy.get ('mat-row[role="row"]').last()
}
getContinueButton(){
    return cy.get('mat-icon:contains( navigate_next )');
}

}
export default new DeliveryAddressPage()