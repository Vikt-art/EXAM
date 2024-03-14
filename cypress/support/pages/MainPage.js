import BasePage from "./BasePage";

class MainPage extends BasePage {
    visit() {
        cy.log('Open Main page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/search')
    }
    getSearchInput() {
        return super.getSearchInput();
    }
    closeBanner() {
        cy.log('Close Banner')
        return cy.get("[aria-label=\'Close Welcome Banner\']").click();
    }
    getAccountButton(){
        return cy.get('#navbarAccount').click();
    }
    getLoginButton(){
        return cy.get('#navbarLoginButton').click()
    }
}
export function findItem(name) {
    cy.log('Search Item');
    cy.get('body').then((body) => {
        console.log(body.find('.item-name:contains("' + name + '")').length)
        if (body.find('.item-name:contains("' + name + '")').length > 0) {
            cy.get('div[class ="item-name"]:contains("' + name + '")').click();
            cy.get('[aria-label="Add to Basket"]').click();
        }
    });
}

export default new MainPage()