/// <reference  types="Cypress" />
//cypress - Spec

describe('My first test', function () {
    it('does not do much', function () {
        expect(true).to.equal(false)
    })
    it('do much', function () {
        expect(true).to.equal(true)
    })
    it('open url in browser', function () {
        cy.visit(Cypress.env('url') + '/seleniumPractise/#/')
    })
    it('show 4 products after type ca in search box', function () {
        cy.visit(Cypress.env('url') + '/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products')
            .find('.product')
            .should('have.length', 4)
        cy.get('.products')
            .find('.product')
            .eq(1)
            .contains('ADD TO CART')
            .click()
    })
    it('looking for cashew and add it to the cart', function () {
        cy.visit(Cypress.env('url') + '/seleniumPractise/#/')
        cy.get('.search-keyword')
            .type('c')
        cy.wait(2000)
        cy.get('.products')
            .find('.product')
            .each(($el, index, $list) => {

                const vegText = $el.find('h4.product-name').text()
                if (vegText.includes('Cashews')) {
                    cy.wrap($el)
                        .find('button')
                        .click()
                }
            })
    })
}) 