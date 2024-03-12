import BasePage from "./BasePage";

class AddressPage extends BasePage {

    getNewAddressIcon (){
        cy.log('Address should be filled')
        return cy.get('[aria-label="Add a new address"]').click();
    }
    getCountryField(){
        cy.log('Country should be filled')
        return cy.get('[placeholder="Please provide a country."]');
    }
    getUserNameField(){
        cy.log('Name should be filled')
        return cy.get('[placeholder="Please provide a name."]');
    }
    getMobileNumberField(){
        cy.log('Mobile should be filled')
        return cy.get('[placeholder="Please provide a mobile number."]');
    }
    getZipCodeField(){
        cy.log('ZIP should be filled')
        return cy.get ('[placeholder="Please provide a ZIP code."]');
    }
    getAddressField(){

        return cy.get('#address');
    }
    getCityField(){
        cy.log('City should be filled')
        return cy.get('[placeholder="Please provide a city."]');
    }
    getStateField(){
        cy.log('State  should be filled')
        return cy.get('[placeholder="Please provide a state."]');
    }
    getSubmitButton(){
        return cy.get('#submitButton');
    }
}
export default new AddressPage()