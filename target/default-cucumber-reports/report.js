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
  "name": "Provide supplier detail",
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
formatter.write("Complete scenario: Provide supplier detail");
formatter.after({
  "status": "passed"
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
  "name": "Provide electricity details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@002"
    }
  ]
});
formatter.step({
  "name": "the user provide supplier details",
  "keyword": "When "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.ElectricityStepDefs.the_user_provide_supplier_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should choose electricity tariff",
  "keyword": "And "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.ElectricityStepDefs.the_user_should_choose_electricity_tariff()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click economymeter button",
  "keyword": "When "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.ElectricityStepDefs.the_user_should_click_economymeter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should choose main source tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.ElectricityStepDefs.the_user_should_choose_main_source_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should choose current electricity usage",
  "keyword": "When "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.ElectricityStepDefs.the_user_should_choose_current_electricity_usage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the pounds period dropdown should have",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.ElectricityStepDefs.the_pounds_period_dropdown_should_have(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click pounds period",
  "keyword": "And "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.ElectricityStepDefs.the_user_should_click_pounds_period()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should choose date range",
  "keyword": "And "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.ElectricityStepDefs.the_user_should_choose_date_range()"
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
formatter.write("Complete scenario: Provide electricity details");
formatter.after({
  "status": "passed"
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
  "name": "Provide gas and preferences details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@003"
    }
  ]
});
formatter.step({
  "name": "the user provide supplier details",
  "keyword": "When "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.ElectricityStepDefs.the_user_provide_supplier_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should provide electriciy details",
  "keyword": "And "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.GasStepDefs.the_user_should_provide_electriciy_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should choose gas tariff",
  "keyword": "When "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.GasStepDefs.the_user_should_choose_gas_tariff()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should choose current gas usage pound period",
  "keyword": "When "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.GasStepDefs.the_user_should_choose_current_gas_usage_pound_period()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should choose gas date range",
  "keyword": "And "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.GasStepDefs.the_user_should_choose_gas_date_range()"
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
formatter.step({
  "name": "the user should choose tariff interest",
  "keyword": "And "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.GasStepDefs.the_user_should_choose_tariff_interest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should give email detail",
  "keyword": "When "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.GasStepDefs.the_user_should_give_email_detail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click notification checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.GasStepDefs.the_user_should_click_notification_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click see result button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.ctmTest.step_definitions.GasStepDefs.the_user_should_click_see_result_button()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Provide gas and preferences details");
formatter.after({
  "status": "passed"
});
});