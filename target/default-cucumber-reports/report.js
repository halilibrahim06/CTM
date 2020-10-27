$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Energy.feature");
formatter.feature({
  "name": "User should be able to look energy comparison, can give own detail and see the result",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the customer is on the energy quote page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.EnergyStepDefs.the_customer_is_on_the_energy_quote_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Provide supplier details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@001"
    }
  ]
});
formatter.step({
  "name": "the user give post code detail",
  "keyword": "When "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.EnergyStepDefs.the_user_give_post_code_detail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click energy bill as a \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.EnergyStepDefs.the_user_should_click_energy_bill_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can compare sort of energy",
  "keyword": "When "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.EnergyStepDefs.the_user_can_compare_sort_of_energy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click \"true\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.EnergyStepDefs.the_user_should_click_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should select \"E.ON\" supplier",
  "keyword": "When "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.EnergyStepDefs.the_user_should_select_supplier(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see other supplier",
  "keyword": "And "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.EnergyStepDefs.the_user_should_see_other_supplier()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click next button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.EnergyStepDefs.the_user_should_click_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Provide supplier details");
formatter.after({
  "status": "passed"
});
});