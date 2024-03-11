import BasePage from "./BasePage";

class FeedBackPage extends BasePage {
    visit() {
        cy.log('Open Feed Back Page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/contact')
    }
    getCommentField() {
        return cy.get('[data-placeholder="What did you like or dislike?"]')
    }
    getResultOfCaptcha(){
        return cy.get('[data-placeholder="Please enter the result of the CAPTCHA."]')
    }
    getSliderRating(){
        return cy.get('mat-slider#rating[aria-valuenow="5"]')
    }
}
export default new FeedBackPage()