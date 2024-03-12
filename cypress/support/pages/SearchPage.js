import BasePage from "./BasePage";

class SearchPage extends BasePage {

    getBasketField (){
        return cy.get('[aria-label="Show the shopping cart"]').click({force: true});
    }
    getSuccessfullyMessage(){
        return cy.get('div:contains(You successfully solved a challenge)')
    }
}
export default new SearchPage()