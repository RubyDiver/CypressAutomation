/// <reference  types="Cypress" />
import HomePage from "../page_objects/homePage"
import ProductPage from "../page_objects/productPage"

describe('Handle Frameworks', function () {

    before(function () {
        cy
            .fixture('example').then(function (data) {
                this.data = data
            })
    })

    it('handle framework', function () {
        const homePage = new HomePage()
        const productPage = new ProductPage()


        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.get_edit_box()
            .type(this.data.firstName)
        homePage.get_gender()
            .select(this.data.gender)
        homePage.get_two_way_data_binding()
            .should('have.value', this.data.firstName)
        homePage.get_edit_box()
            .should('have.attr', 'minlength', '2')
        homePage.get_enterpreneaur()
            .should('be.disabled')
        homePage.get_shop_tab()
            .click()
        this.data.phoneName.forEach(function (element) {
            cy.selectProduct(element)
        })

        productPage.get_checkout_button()
            .click()
        cy.get('.btn-success')
            .click()
        cy.get('#country')
            .type('India')
        cy.get('.suggestions > ul > li > a')
            .click()
    })

})