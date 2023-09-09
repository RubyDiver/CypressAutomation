/// <reference  types="Cypress" />
/// <reference  types="cypress-iframe" />
import 'cypress-iframe'

describe('Frame Test', function () {

    it('Handle the iframe case', function () {
        cy
            .visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy
            .frameLoaded('#courses-iframe')
        cy
            .iframe()
            .find("a[href='lifetime-access']")
            .eq(1)
            .click()
        cy
            .wait(4000)
        cy
            .iframe()
            .find("h6[class*='pricing-plan-title']")
            .should('have.length', 3)
    })
})