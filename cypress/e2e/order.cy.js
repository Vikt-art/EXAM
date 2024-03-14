import user from '../fixtures/user.json'
import {findItemByKeyword} from "../support/helper";
import loginPage from "../support/pages/LoginPage";
import mainPage from "../support/pages/MainPage";
import basketPage from "../support/pages/BasketPage";
import addressPage from "../support/pages/AddressPage";
import deliveryAddressPage from "../support/pages/DeliveryAddressPage";
import selectAddressPage from "../support/pages/SelectAddressPage";
import paymentOptionsPage from "../support/pages/PaymentOptionsPage";
import orderPage from "../support/pages/OrderPage";
import searchPage from "../support/pages/SearchPage";
import registrationPage from "../support/pages/RegistrationPage";
import {faker} from "@faker-js/faker";
user.email =faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'example.fakerjs.dev', allowSpecialCharacters: true })
user.name = faker.person.firstName()
user.country = faker.location.country()
user.address = faker.location.street()
user.city = faker.location.city()
user.state = faker.location.state()


describe('Order positive scenarios', () => {
    describe('Order positive scenarios', () => {
        it('Find an Item', () => {
            registrationPage.visit()
            registrationPage.closeBanner()
            registrationPage.fillRegistrationFields(user.email,user.password,user.answer)
            mainPage.visit()
            mainPage.getAccountButton();
            mainPage.getLoginButton();
            loginPage.fillLoginFields(user.email,user.password,user.answer)


            findItemByKeyword('Banana Juice (1000ml)')
            searchPage.getBasketField().click();
            basketPage.getCheckoutBasketField()
            addressPage.getNewAddressIcon();
            addressPage.getCountryField().type(user.country);
            addressPage.getUserNameField().type(user.name);
            addressPage.getMobileNumberField().type(user.phone);
            addressPage.getZipCodeField().type(user.ZIP);
            addressPage.getAddressField().type(user.address);
            addressPage.getCityField().type(user.city);
            addressPage.getStateField().type(user.state);
            addressPage.getSubmitButton().click();
            selectAddressPage.getSelectAddressField().click();
            selectAddressPage.getContinueField().click();
            deliveryAddressPage.getChooseDeliverySpeedField().click();
            deliveryAddressPage.getContinueButton().click();
            paymentOptionsPage.getAddNewCardField().click();
            paymentOptionsPage.getCardNameField().eq(1).type(user.name);
            paymentOptionsPage.getCardNumberField().type(user.cardnumber);
            paymentOptionsPage.getExpireMonthField().eq(0).select(2);
            paymentOptionsPage.getExpireYearField().eq(1).select('2090');
            paymentOptionsPage.getSubmitButton().click();
            paymentOptionsPage.getSelectCardIcon().click();
            paymentOptionsPage.getContinueButton().click();
            orderPage.getcheckoutButton().click();
            orderPage.getConfirmMessage().should('contain', 'Thank you for your purchase!')
        })
    })
})

