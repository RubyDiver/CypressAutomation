/// <reference  types="Cypress" />
import HomePage from "../page_objects/home_page"

describe('Handle Frameworks', function () {

    before(function () {
        cy
            .fixture('example').then(function (data) {
                this.data = data
            })
    })

    it('handle framework', function () {
        const home_page = new HomePage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        home_page.get_edit_box()
            .type(this.data.firstName)
        home_page.get_gender()
            .select(this.data.gender)
        home_page.get_two_way_data_binding()
            .should('have.value', this.data.firstName)
        home_page.get_edit_box()
            .should('have.attr', 'minlength', '2')
        home_page.get_enterpreneaur()
            .should('be.disabled')
        home_page.get_shop_tab()
            .click()
        this.data.phoneName.forEach(function (element) {
            cy.selectProduct(element)
        })
        cy.contains('a.btn.btn-primary', 'Checkout (2)')

    })

}) 
