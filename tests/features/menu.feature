@menu @standard_user
Feature: Menu button
    As a user
    I want to be able to open the menu
    So that I can navigate to different sections of the app

    Background: Logged in as a Standard User
        Given I am logged in as a Standard User
        And I am on the inventory page
        When I click the menu button

    Scenario: Open menu
        Then I should see the menu items:
            | menu_item       |
            | All Items       |
            | About           |
            | Logout          |
            | Reset App State |

    Scenario: Close menu
        When I click the X button
        Then I should not see the menu

    Scenario Outline: Menu button navigation
        Given I am on the cart page
        When I click the menu button
        And I click "<menu_item>" button
        Then I should be on the "<expected_page>" page

        Examples:
            | menu_item       | expected_page |
            | All Items       | inventory     |
            | About           | about         |
            | Logout          | login         |




