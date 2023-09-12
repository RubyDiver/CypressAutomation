/// <reference  types="Cypress" />


describe('Handle Frameworks', function () {

    before(function () {
        cy
            .fixture('example').then(function (data) {
                this.data = data
            })
    })

    it('handle framework', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.form-control[name*="name"]')
            .type(this.data.firstName)
        cy.get('#exampleFormControlSelect1')
            .select(this.data.gender)
        cy.get('input[name="name"]:nth-child(1)')
            .should('have.value', this.data.firstName)
        cy.get('.form-control[name*="name"]')
            .should('have.attr', 'minlength', '2')
        cy.get('input[value="option3"]')
            .should('be.disabled')
        cy.get(':nth-child(2) > .nav-link')
            .click()
        this.data.phoneName.forEach(function (element) {
            cy.selectProduct(element)
        })
        cy.contains('a.btn.btn-primary', 'Checkout (2)')

    })
    
}) 
