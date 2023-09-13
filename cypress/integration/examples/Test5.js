/// <reference  types="Cypress" />

describe('Handling Child Windows', function () {
    it('Should handle child window', function () {
        cy
            .visit(Cypress.env('url') + '/AutomationPractice/')
        cy
            .get('#opentab')
            .invoke('removeAttr', 'target')
            .click()
        cy
            .origin('https://www.qaclickacademy.com/', () => {
                cy
                    .get('#navbarSupportedContent a[href*="about"]')
                    .click()
                cy
                    .get('.mt-50 h2')
                    .contains("Welcome to QAClick Academy")
            })

    })
})