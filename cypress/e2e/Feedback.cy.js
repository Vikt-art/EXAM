import user from '../fixtures/user.json'
import {evaluateMathExpression} from "../support/helper";
import FeedbackPage from "../support/pages/LoginPage";
import LoginPage from "../support/pages/LoginPage";
import feedBackPage from "../support/pages/FeedBackPage";
import loginPage from "../support/pages/LoginPage";

describe('Feedback positive scenarios', () => {
    it ('Feedback', () => {
        feedBackPage.visit();
        loginPage.closeBanner()
        feedBackPage.getTitleField().should("contain", "Customer Feedback")
        feedBackPage.getAuthorField().should("be.disabled")
        feedBackPage.getCommentField().type("Positive feedback");
        feedBackPage.getRatingTitle().should("contain", "Rating");
        feedBackPage.getRatingSlider().invoke('val', 5).trigger('input');
        feedBackPage.getCaptchaTitle().should("contain.text", "CAPTCHA")
        feedBackPage.getQuestionTitle().should("contain.text", "What is")
        evaluateMathExpression('#captcha')
    });
});
