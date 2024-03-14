export default class BasePage {


    getSearchInput(){
        return cy.get('[type="text"]')
    }

}