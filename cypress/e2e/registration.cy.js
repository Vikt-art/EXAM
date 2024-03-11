import user from '../fixtures/user.json'
import registrationPage from "../support/pages/RegistrationPage";

describe('Registration positive scenarios', () => {

  it('Registration', () => {
    registrationPage.visit();
    registrationPage.closeBanner();
    registrationPage.getEmailField().type(user.email);
    registrationPage.getEmailField().should("have.prop", 'value', user.email);
    registrationPage.getPasswordField().type(user.password);
    registrationPage.getPasswordField().should("have.prop", 'value', user.password);
    registrationPage.getRepeatPasswordField().type(user.password);
    registrationPage.getRepeatPasswordField().should("have.prop", 'value', user.password);
    registrationPage.getSecurityQuestionField();
    registrationPage.getSelectQuestionField();
    registrationPage.getAnswerQuestionField();
    registrationPage.getAnswerQuestionField().should("have.prop", 'value', user.answer);
    registrationPage.getRegisterButton()
  });
});
  describe('Registration negative scenarios', () => {
    it('Registration without email', () => {
      registrationPage.visit();
      registrationPage.closeBanner();
      registrationPage.getEmailField().type('1');
      registrationPage.getEmailField().clear();
      registrationPage.getPasswordField().type(user.password);
      registrationPage.getRepeatPasswordField().type(user.password);
      registrationPage.getSecurityQuestionField()
      registrationPage.getSelectQuestionField()
      registrationPage.getAnswerQuestionField().type(user.answer);
      registrationPage.getErrorMessageText().should("contain", "Please provide an email address.");
  });
  it('Registration without password', () => {
    registrationPage.visit();
    registrationPage.closeBanner();
    registrationPage.getEmailField().type('1');
    registrationPage.getPasswordField().click();
    registrationPage.getErrorMessageText().should("contain", 'Email address is not valid.');
  });

  it('Registration with invalid password', () => {
    registrationPage.visit();
    registrationPage.closeBanner();

    registrationPage.getEmailField().type(user.email);
    registrationPage.getPasswordField().type('1');
    registrationPage.getRepeatPasswordField().click();
    registrationPage.getErrorMessageText2().should("contain", 'Password must be 5-40 characters long. ');

  });
  it('Registration with invalid repeatPassword', () => {
    registrationPage.visit();
    registrationPage.closeBanner();
    registrationPage.getEmailField().type(user.email);
    registrationPage.getPasswordField().type(user.password);
    registrationPage.getRepeatPasswordField().type(1);
    registrationPage.getPasswordField().click();
    registrationPage.getErrorMessageText3().should("contain", ' Passwords do not match');

  });

});
