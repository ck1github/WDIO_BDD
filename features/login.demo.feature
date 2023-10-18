Feature: Test Login Functionality

  Scenario Outline: Check login with login credentials
    Given User is on login page
    When User enters <username> and <password>
    And Click on login button
    Then This <message> is display

    Examples: 
      | username    | password                | message                        |
      | tomsmith    | SuperSecretPassword!    | You logged into a secure area! |
      | tomsmith123 | Super123SecretPassword! | Your username is invalid!      |
