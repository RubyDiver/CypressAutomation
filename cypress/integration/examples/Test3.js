/// <reference  types="Cypress" />
//cypress - Spec

describe('Check checkbox', function() {

    beforeEach(() => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
      })
    // Check checkbox 

    it('check checkbox', function() {
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
    })

    // Static dropdown

    it('check static dropdown', function() {
        cy.get('select').select('option2').should('have.value', 'option2') 
    })

    // Dynamic dropdown

    it('check dynamic dropdown', function() {
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($el, index, $list) => {
            if($el.text() === "India")
            {
               $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value', "India")
    })

    // Handling visible and invisible element

    it('hide and unhide element', function() {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    })

    // Check radiobutton

    it('check radiobutton', function() {
        cy.get('input[value=radio2]').check().should('have.value', "radio2").and('be.checked')
    })
})