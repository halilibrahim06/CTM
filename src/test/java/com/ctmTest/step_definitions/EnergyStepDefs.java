package com.ctmTest.step_definitions;

import com.ctmTest.pages.EnergyPage;
import com.ctmTest.utilities.ConfigurationReader;
import com.ctmTest.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class EnergyStepDefs {

    EnergyPage energyPage = new EnergyPage();
    String postcode = "PE2 6YS";
    String otherOption = "Breeze";
    String sort = "dual";

    @Given("the customer is on the energy quote page")
    public void the_customer_is_on_the_energy_quote_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
        Assert.assertEquals("Energy - Compare Gas and Electricity Suppliers | Compare The Market", Driver.getDriver().getTitle());
    }

    @When("the user give post code detail")
    public void the_user_give_post_code_detail() {
        energyPage.postcodeBox.sendKeys(postcode);
    }


    @When("the user should click energy bill as a {string}")
    public void the_user_should_click_energy_bill_as_a(String tab) {
        energyPage.getBill(tab).click();

    }

    @When("the user can compare sort of energy")
    public void the_user_can_compare_sort_of_energy() {
        energyPage.getType(sort).click();

    }

    @When("the user should click {string} tab")
    public void the_user_should_click_tab(String supplier) {
        energyPage.supplierTab(supplier).click();

    }

    @When("the user should select {string} supplier")
    public void the_user_should_select_supplier(String mainSupplier) {
        energyPage.mainSupplier(mainSupplier).click();

    }

    @Then("the user should click next button")
    public void the_user_should_click_next_button() {
        energyPage.nextButton.click();

    }

    @Then("the user should see other supplier")
    public void the_user_should_see_other_supplier() {
        energyPage.getSupplierDropDown().selectByVisibleText(otherOption);

    }

}
