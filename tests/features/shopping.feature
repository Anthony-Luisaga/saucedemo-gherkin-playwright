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

    Scenario Outline: Add an item to the cart
        When I click Add to cart button on "<item>"
        And I click the cart button
        Then I should see "<item>" in the cart

        Examples:
            | item                              |
            | Sauce Labs Backpack               |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |


    Scenario: Add multiple items to the cart
        When I click Add to cart button on multiple items:
            | item                              |
            | Sauce Labs Backpack               |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |
        And I click the cart button
        Then I should see the selected items in the cart:
            | items                              |
            | Sauce Labs Backpack               |
            | Sauce Labs Bolt T-Shirt           |
            | Sauce Labs Fleece Jacket          |
            | Sauce Labs Onesie                 |
            | Test.allTheThings() T-Shirt (Red) |

