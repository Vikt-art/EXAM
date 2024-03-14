import BasePage from "./BasePage";

class LoginPage extends BasePage {
    visit() {
        cy.log('Open authorization form')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login')
    }

    closeBanner() {
        cy.log('Close Banner')
        return cy.get("[aria-label=\'Close Welcome Banner\']").click();
    }

    getLoginEmailField() {
        cy.log ('Fill email field')
        return cy.get('#email');
    }

    getLoginPasswordField() {
        cy.log ('Fill login field')
        return cy.get('#password');
    }

    getSubmitButton() {
        cy.log ('Submit authorization')
        return cy.get('#loginButton').click();
    }
    getErrorMessageText() {
        cy.log ('Error message should be appeared')
        return cy.get('div:contains(Invalid email or password)')

    }

    fillLoginFields(useremail, userpassword) {
        cy.log('Fill in authorization fields');
        this.getLoginEmailField().type(useremail);
        this.getLoginPasswordField().type(userpassword);
        this.getSubmitButton();

    }
     getAllProductsTitle(){
         cy.log ('Main page should be opened')
        return cy.get ('div:contains(All Products)')
}

}
export default new LoginPage()