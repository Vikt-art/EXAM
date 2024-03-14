import BasePage from "./BasePage";

class BasketPage extends BasePage {
    // visit() {
    //     cy.log('Basket Item')
    //     cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/basket')
    getCheckoutBasketField (){
        cy.log ('Checkout Item')
        return cy.get('#checkoutButton').click({force: true});
    }
}
export default new BasketPage()