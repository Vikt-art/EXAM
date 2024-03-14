import BasePage from "./BasePage";

class OrderPage extends BasePage {
    getcheckoutButton (){
        return cy.get('#checkoutButton')
    }
    getConfirmMessage(){
        return cy.get('.confirmation')
    }
}
export default new OrderPage()