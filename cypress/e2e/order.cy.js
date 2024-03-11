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

//     it('Order item', () => {
//
//         // findItem('banana');
//         findItemByKeyword('banana')
//         cy.get('[aria-label="Show the shopping cart"]').click();
//         cy.get('#checkoutButton').click({force: true});
//         cy.get('[aria-label="Add a new address"]').click();
//         cy.get('[placeholder="Please provide a country."]').type(user.country);
//         cy.get('[placeholder="Please provide a name."]').type(user.name);
//         cy.get('[placeholder="Please provide a mobile number."]').type(user.phone);
//         cy.get('[placeholder="Please provide a ZIP code."]').type(user.ZIP);
//         cy.get('#address').type(user.address);
//         cy.get('[placeholder="Please provide a city."]').type(user.city);
//         cy.get('[placeholder="Please provide a state."]').type(user.state);
//         cy.get('#submitButton').click();
//         cy.get('mat-row[role="row"]').last().click()
//         cy.get('[aria-label="Proceed to payment selection"]').click();
//         cy.get('mat-row[role="row"]').last().click()
//         cy.get('mat-icon:contains( navigate_next )').click();
//         cy.get('mat-panel-title:contains( Add new card )').click();
//         cy.get('input[type="text"]').eq(1).type(user.name);
//         cy.get('input[type="number"]').eq(0).type(user.cardnumber);
//         cy.get('select').eq(0).select(2);
//         cy.get('select').eq(1).select('2090');
//         cy.get('span:contains(Submit)').click();
//         // cy.get('[role="row"]:last').eq(0).click();
//         cy.get('mat-table').find('mat-row').last().find('.mat-cell.cdk-column-Selection').find('input[type="radio"]').click({force: true});
//         cy.get('.mat-button-wrapper').contains('Continue').click();
//         cy.get('#checkoutButton').click();
//         cy.get('.confirmation').should('contain', 'Thank you for your purchase!');
//
//
//     });
//
//
// });
//
//
