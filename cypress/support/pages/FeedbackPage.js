import BasePage from "./BasePage";

class FeedbackPage extends BasePage {
    visit() {
        cy.log('Open Feed Back Page')
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/contact')
    }

    getTitleField() {
        cy.log('Title should be visible')
        return cy.get('h1:contains(Customer Feedback)')
    }

    getRatingTitle() {
        cy.log('Title of rating should be visible')
        return cy.get('label:contains(Rating)')
    }

    getAuthorField() {
        cy.log('Author field should be should disabled')
        return cy.get('[aria-label="Field with the name of the author"]')
    }

    getCommentField() {
        cy.log('Comment should be added')
        return cy.get('[data-placeholder="What did you like or dislike?"]')
    }

    getRatingSlider() {
        cy.log('Slider should be triggered')
        return cy.get('mat-slider#rating')
    }

    getResultOfCaptcha() {
        return cy.get('[data-placeholder="Please enter the result of the CAPTCHA."]')
    }

    getCaptchaTitle() {
        return cy.get('label:contains(CAPTCHA)')
    }

    getQuestionTitle() {
        return cy.get('span:contains(What is)')
    }

    getSubmitButton() {
        return cy.get('#submitButton')
    }

    getMessageAfterSubmit() {
        return cy.get('span:contains(Thank you for your feedback)')
    }
}

export default new FeedbackPage()

