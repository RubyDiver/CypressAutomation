Feature: Ecommerce End-to-End validation

    Feature Description
    @Regretion
    Scenario: Ecommerce products delivery
        Given I open Ecommerce page
        When I add items to cart
        And Validate the total prices
        Then Select the country, submit and verify thank you

    @Smoke
    Scenario: Filling the form to shop
        Given I open Ecommerce page
        When I fill the form details
            | name | gender |
            | bobz | Male   |
        And Validate the forms behaviour
        Then Select the shop page
