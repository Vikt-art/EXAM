import BasePage from "./BasePage";

class AddressPage extends BasePage {

    getNewAddressIcon (){
        return cy.get('[aria-label="Add a new address"]').click();
    }
    getCountryField(){
        return cy.get('[placeholder="Please provide a country."]');
    }
    getUserNameField(){
        return cy.get('[placeholder="Please provide a name."]');
    }
    getMobileNumberField(){
        return cy.get('[placeholder="Please provide a mobile number."]');
    }
    getZipCodeField(){
        return cy.get ('[placeholder="Please provide a ZIP code."]');
    }
    getAddressField(){
        return cy.get('#address');
    }
    getCityField(){
        return cy.get('[placeholder="Please provide a city."]');
    }
    getStateField(){
        return cy.get('[placeholder="Please provide a state."]');
    }
    getSubmitButton(){
        return cy.get('#submitButton');
    }
}
export default new AddressPage()