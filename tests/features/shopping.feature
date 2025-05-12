@shopping @standard_user
Feature: Shopping
    As a user
    I want to be able to add items to a cart
    So that I can checkout them

    Background: Logged in as a Standard User
        Given I am logged in as a Standard User
        And I am on the inventory page

    Scenario: View the cart
        When I click the cart button
        Then I should be on the cart page