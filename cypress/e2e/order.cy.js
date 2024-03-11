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


describe('Order positive scenarios', () => {
    describe('Order positive scenarios', () => {
        it.only('Find an Item', () => {
            mainPage.visit();
            mainPage.closeBanner();
            mainPage.getAccountButton();
            mainPage.getLoginButton();
            loginPage.fillLoginFields(user.email, user.password);
            // cy.get('div[class = "item-name"]:contains( Banana Juice )')
            // findItem('banana');
            // findItemByKeyword('banana')
            basketPage.getCheckoutBasketField();
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
            paymentOptionsPage.getCardNamefield().type(user.name);
            paymentOptionsPage.getCardNumberField().type(user.cardnumber);
            paymentOptionsPage.getExpireMonthField();
            paymentOptionsPage.getExpireYearField();
            paymentOptionsPage.getSubmitButton().click();
            paymentOptionsPage.getSelectCardIcon().click();
            paymentOptionsPage.getContinueButton().click();
            orderPage.getcheckoutButton().click();
            orderPage.getConfirmMessage().should('contain', 'Thank you for your purchase!')
        })
        })
})

