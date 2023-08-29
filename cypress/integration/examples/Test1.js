//cypress - Spec

describe('My first test', function() {
    it ('does not do much', function() {
        expect(true).to.equal(false)
    })
    it ('do much', function() {
        expect(true).to.equal(true)
    })
    it ( 'open url in browser', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
})