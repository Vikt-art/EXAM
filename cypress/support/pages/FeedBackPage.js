import BasePage from "./BasePage";

class FeedBackPage extends BasePage {
    visit() {
        cy.log('Open Feed Back Page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/contact')
    }
    getTitleField(){
        return cy.get('h1:contains(Customer Feedback)')
    }
    getRatingTitle(){
        return cy.get('label:contains(Rating)')
    }
    getAuthorField(){
        return cy.get('[aria-label="Field with the name of the author"]')
    }
    getCommentField() {
        return cy.get('[data-placeholder="What did you like or dislike?"]')
    }
    getRatingSlider(){
        return cy.get('mat-slider#rating')
    }
    getResultOfCaptcha(){
        return cy.get('[data-placeholder="Please enter the result of the CAPTCHA."]')
    }
    getCaptchaTitle(){
        return cy.get('label:contains(CAPTCHA)')
    }
    getQuestionTitle(){
        return cy.get('span:contains(What is)')
    }
    getSubmitButton() {
        return cy.get('#submitButton')
}
}
export default new FeedBackPage()

export function evaluateMathExpression(expression) {
    try {
        return eval(expression);
    } catch (error) {
        console.error('Chyba při výpočtu výrazu:', error);
        return null;
    }
}
