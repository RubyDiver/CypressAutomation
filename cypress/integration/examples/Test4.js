/// <reference  types="Cypress" />
//cypress - Spec

describe('Handling alerts, popups and child windows', function () {

    beforeEach(() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

    it('catch window alert', function () {
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
    })

    it('catch window confirm alert', function () {
        cy.get('[value="Confirm"]').click()
        cy.on('window:confirm', (str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})
