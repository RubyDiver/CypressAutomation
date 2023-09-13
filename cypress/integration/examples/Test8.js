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
        Cypress.config('defaultCommandTimeout', 8000)
        const homePage = new HomePage()
        const productPage = new ProductPage()


        cy.visit(Cypress.env('url') + 'angularpractice/')
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

        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        }).then(function () {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function (element) {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        cy.get('.btn-success')
            .click()
        cy.get('#country')
            .type('India')
        cy.get('.suggestions > ul > li > a')
            .click()
        cy.get('.checkbox > label')
            .click()
        cy.get('input[type="submit"]')
            .click()
        cy.get('.alert')
            .contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
    })
})  