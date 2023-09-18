/// <reference  types="Cypress" />
//cypress - Spec

describe('Test API', function () {
    it(' Tests pure back-end app', function () {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

            "name": "Learn Appium Automation with Java",
            "isbn": "bcd",
            "aisle": "22s7",
            "author": "John foe"
        })


            .then(function (response) {
                expect(response.body).to.have
                    .property("Msg", "successfully added")
            })
    })
})
