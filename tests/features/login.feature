@login
Feature: Login to SauceDemo
    As a user of SauceDemo
    I want to log in to the application
    So that I can access the product inventory

    Background:
        Given I am on the SauceDemo login page

    @standard_user
    Scenario: Succesful Standard User Login
        When I login with the username "STANDARD_USER" and password "PASSWORD"
        Then I should be redirected to the inventory page
        And I should see the product list

    Scenario: Succesful Problem User Login
        When I login with the username "PROBLEM_USER" and password "PASSWORD"
        Then I should be redirected to the inventory page
        And I should see the product list

    Scenario: Succesful Performance Glitch User Login
        When I login with the username "PERFORMANCE_GLITCH_USER" and password "PASSWORD"
        Then I should be redirected to the inventory page
        And I should see the product list

    Scenario: Succesful Error User Login
        When I login with the username "ERROR_USER" and password "PASSWORD"
        Then I should be redirected to the inventory page
        And I should see the product list

    Scenario: Succesful Visual User Login
        When I login with the username "VISUAL_USER" and password "PASSWORD"
        Then I should be redirected to the inventory page
        And I should see the product list

    Scenario: Unsuccesful Locked Out User Login
        When I login with the username "LOCKED_OUT_USER" and password "PASSWORD"
        Then I should remain in the login page
        And I should see an error message "Epic sadface: Sorry, this user has been locked out."

    Scenario: Unsuccesful login with empty username
        When I enter the password "PASSWORD"
        And I click the login button
        Then I should remain in the login page
        And I should see an error message "Epic sadface: Username is required"

    Scenario: Unsuccesful login with empty password
        When I enter the username "STANDARD_USER"
        And I click the login button
        Then I should remain in the login page
        And I should see an error message "Epic sadface: Password is required"

    Scenario: Unsuccesful login with empty username and password
        When I click the login button
        Then I should remain in the login page
        And I should see an error message "Epic sadface: Username is required"
