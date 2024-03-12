export function findItem(name) {
    cy.log('Search Item');
    let mojElement = cy.get('.item-name').filter((index, element) => {
        return new RegExp(name).test(element.textContent);


    });
    mojElement.parents('.mat-grid-tile-content').find('button[aria-label="Add to Basket"]').click()

}

export function findItemByKeyword(keyword) {
    cy.log('Search Item by Keyword');
    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/search');
    // cy.get('[type="text"]').should('be.visible');
    cy.get('#searchQuery').click()
    cy.get('[type="text"]').type(keyword, {force: true}).type('{enter}');
    cy.get('[aria-label="Add to Basket"]').click()

  // findItem(keyword)
}

export function solveCaptcha() {
    cy.get('#captcha').invoke('text').then( captchaText => {
        const result = eval(captchaText); cy.get('[data-placeholder="Please enter the result of the CAPTCHA."]').type(result); }) }

