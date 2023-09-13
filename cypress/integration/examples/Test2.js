/// <reference  types="Cypress" />

describe('Second test', function () {
    it('Open the cart card', function () {
        cy.visit(Cypress.env('url') + '/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator')
            .find('.product')
            .each(($el, index, $list) => {

                const textVeg = $el.find('h4.product-name').text()
                if (textVeg.includes('Cashews')) {
                    $el.find('button')
                        .trigger("click")
                }
            })
        cy.get('.tada')
            .click()
        cy.contains('PROCEED TO CHECKOUT')
            .click()
        cy.contains('Place Order')
            .click()
    })
}
)