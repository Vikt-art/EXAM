import user from '../fixtures/user.json'
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import {faker} from "@faker-js/faker";
user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'example.fakerjs.dev', allowSpecialCharacters: true })
user.password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' })
user.answer = faker.person.gender()

describe('Authorization positive scenarios', () => {
    it('Authorization', () => {
        registrationPage.visit()
        registrationPage.closeBanner()
        registrationPage.fillRegistrationFields(user.email,user.password,user.answer)
        loginPage.visit();
        loginPage.fillLoginFields(user.email,user.password);
        loginPage.getAllProductsTitle();

    });

    describe('Authorization negative scenarios', () => {
        it('Authorization with invalid email', () => {
            loginPage.visit()
            loginPage.closeBanner()
            loginPage.fillLoginFields(user.invalidEmail, user.password)
            loginPage.getErrorMessageText().should("contain", "Invalid email or password")

        });
        it('Authorization with invalid password', () => {
            loginPage.visit()
            loginPage.closeBanner()
            loginPage.fillLoginFields(user.email, user.invalidPassword)
            loginPage.getErrorMessageText().should("contain", "Invalid email or password")
        });

    });
});

