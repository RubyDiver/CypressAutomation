import HomePage from '../../../page_objects/homePage'
import ProductPage from '../../../page_objects/productPage'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = new HomePage()
const productPage = new ProductPage()
let name

Given('I open Ecommerce page', function () {
    cy.visit(Cypress.env('url') + 'angularpractice/')
})

When('I add items to cart', function () {
    homePage.get_shop_tab()
        .click()
    this.data.phoneName.forEach(function (element) {
        cy.selectProduct(element)
    })

    productPage.get_checkout_button()
        .click()

})

When('Validate the total prices', function () {
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
})


Then('Select the country, submit and verify thank you', function () {
    cy.get('.btn-success')
        .click()
    cy.get('#country')
        .type('India')
    cy.get('.suggestions > ul > li > a')
        .click()
    cy.get('.checkbox > label')
        .click({force: true})
    cy.get('input[type="submit"]')
        .click()
    cy.get('.alert')
        .contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
})

When('I fill the form details', function (dataTable) {
    name = dataTable.rawTable[1][0]
    homePage.get_edit_box()
        .type(dataTable.rawTable[1][0])
    homePage.get_gender()
        .select(dataTable.rawTable[1][1])
})

When('Validate the forms behaviour', function (dataTable) {
    homePage.get_two_way_data_binding()
        .should('have.value', name)
    homePage.get_edit_box()
        .should('have.attr', 'minlength', '2')
    homePage.get_enterpreneaur()
        .should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)
})


Then('Select the shop page', function () {
    homePage.get_shop_tab()
        .click()
})
