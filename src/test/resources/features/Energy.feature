@smoke
Feature: User should be able to look energy comparison, can give own detail and see the result

  Background:
    Given the customer is on the energy quote page

  @001
  Scenario: Provide supplier detail
    When the user give post code detail
    And the user should click energy bill as a "true"
    When the user can compare sort of energy
    And the user should click "true" tab
    When the user should select "E.ON" supplier
    And the user should see other supplier
    Then the user should click next button


  @002
  Scenario: Provide electricity details
    When the user provide supplier details
    And the user should choose electricity tariff
    When the user should click economymeter button
    And the user should choose main source tab
    When the user should choose current electricity usage
    Then the pounds period dropdown should have
      | Please select...|
      | Monthly         |
      | Quarterly       |
      | Six Monthly     |
      | Annually        |
    And the user should click pounds period
    And the user should choose date range
    Then the user should click next button


  @003
  Scenario: Provide gas and preferences details
    When the user provide supplier details
    And the user should provide electriciy details
    When the user should choose gas tariff
    When the user should choose current gas usage pound period
    And the user should choose gas date range
    Then the user should click next button
    And the user should choose tariff interest
    When the user should give email detail
    And the user should click notification checkbox
    Then the user should click see result button
