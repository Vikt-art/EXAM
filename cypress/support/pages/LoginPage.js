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
        return cy.get('#email');
    }

    getLoginPasswordField() {
        return cy.get('#password');
    }

    getSubmitButton() {
        return cy.get('#loginButton').click();
    }
    getErrorMessageText() {
        return cy.get('div:contains(Invalid email or password)')

    }

    fillLoginFields(useremail, userpassword) {
        cy.log('Fill in authorization fields');
        this.getLoginEmailField().type(useremail);
        this.getLoginPasswordField().type(userpassword);
        this.getSubmitButton();

        // if (cy.get ('.heading > .ng-star-inserted').should('exist')) {
        //     cy.get('.heading > .ng-star-inserted').contains('All Products');
        // }
    }
     getAllProductsTitle(){
        return cy.get ('div:contains(All Products)')
}

   getNotYetCustomerButton(){
      return  cy.get('#newCustomerLink a.primary-link').contains('Not yet a customer?').click();
   }
}
export default new LoginPage()