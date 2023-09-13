/// <reference  types="Cypress" />

describe('Handle the column', function () {

    beforeEach(() => {
        cy
            .visit(Cypress.env('url') + '/AutomationPractice/')
    })

    it('Check position in column', function () {
        cy
            .get('#product[name="courses"] tr td:nth-child(2)')
            .each(($el, index, $list) => {
                if ($el
                    .text() === "Master Selenium Automation in simple Python Language") {
                    cy
                        .get('#product[name="courses"] tr td:nth-child(2)')
                        .eq(index)
                        .next()
                        .then(function (price) {
                            const priceText = price.text()
                            expect(priceText).to.equal('25')
                        })
                }
            })
    })

    it('check mouse hover', function () {
        cy
            .get('div.mouse-hover-content')
            .invoke('show')
        cy
            .contains('Top')
            .click()
        cy
            .url()
            .should('include', 'top')
    })
})