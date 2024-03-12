import user from '../fixtures/user.json'
import {FIND,FIND2, findItem, findItemByKeyword} from "../support/helper";
import MainPage from "../support/pages/MainPage";
import loginPage from "../support/pages/LoginPage";
import mainPage from "../support/pages/MainPage";
import registrationPage from "../support/pages/RegistrationPage";
import BasketPage from "../support/pages/BasketPage";
import basketPage from "../support/pages/BasketPage";
import addressPage from "../support/pages/AddressPage";
import deliveryAddressPage from "../support/pages/DeliveryAddressPage";
import SelectAddressPage from "../support/pages/SelectAddressPage";
import selectAddressPage from "../support/pages/SelectAddressPage";
import paymentOptionsPage from "../support/pages/PaymentOptionsPage";
import orderPage from "../support/pages/OrderPage";
import searchPage from "../support/pages/SearchPage";
import {fa, faker} from "@faker-js/faker";
user.ZIP = faker.location.zipCode()
user.name = faker.person.firstName()
user.country = faker.location.country()
user.phone = faker.phone.number()
user.address = faker.location.street()
user.city = faker.location.city()
user.state = faker.location.state()
user.cardnumber = faker.finance.creditCardNumber()
user.

describe('Order positive scenarios', () => {
    describe('Order positive scenarios', () => {
        it('Find an Item', () => {
            mainPage.visit();
            mainPage.closeBanner();
            mainPage.getAccountButton();
            mainPage.getLoginButton();
            loginPage.fillLoginFields(user.email, user.password);

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

