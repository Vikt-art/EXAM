export function findItem(name) {
    cy.log('Search Item');
    cy.get('body').then((body) => {
        if (body.find('.item-name:contains("' + name + '")').length > 0) {
            cy.get('.item-name:contains("' + name + '")').click();
            cy.get('[aria-label="Add to Basket"]').click();
        }
    });
}

export function findItemByKeyword(keyword) {
    cy.log('Search Item by Keyword');
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/search');
    cy.get('[type="text"]').should('be.visible');
    cy.get('[type="text"]').type('text', {force: true});
    cy.get('[type="text"]').type(keyword).type('{enter}');

    cy.get('.item-name').each(($el) => {
        const text = $el.text().toLowerCase();
        if (text.includes(keyword.toLowerCase())) {
            cy.wrap($el).click();
            cy.get('[aria-label="Add to Basket"]').click();
        }
    });
}

//     export function FIND2 (itemName) {
//         cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/search');
//
//         cy.get('.item-name').each(($el) => {
//             const text = $el.text().toLowerCase();
//             if (text.includes(itemName.toLowerCase())) {
//                 cy.wrap($el).click();
//                 return false;
//             }
//         });
//     z
//





// export function FIND (itemName) {
//     cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/search');
//
//     cy.get('.item-name').filter((index, element) => {
//         return new RegExp(itemName, 'i').test(element.textContent);
//     }).first().click()
//
// }
export function evaluateMathExpression(expression) {
    try {
        return eval(expression);
    } catch (error) {
        console.error
        return null;
    }
}