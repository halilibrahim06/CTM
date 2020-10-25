package com.ctmTest.step_definitions;

import com.ctmTest.pages.ElectricityPage;
import com.ctmTest.pages.EnergyPage;
import com.ctmTest.utilities.BrowserUtils;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class ElectricityStepDefs {

    EnergyPage energyPage = new EnergyPage();
    ElectricityPage electricityPage = new ElectricityPage();
    BrowserUtils browserUtils = new BrowserUtils();
    String postcode = "PE2 6YS";
    String tab = "true";
    String type = "dual";
    String supplier = "true";
    String mainSupplier = "E.ON";
    String otherTariff = "Age UK Prepayment";


    @When("the user provide supplier details")
    public void the_user_provide_supplier_details() {
        energyPage.postcodeBox.sendKeys(postcode);
        energyPage.getBill(tab).click();
        energyPage.getType(type).click();
        energyPage.supplierTab(supplier).click();
        energyPage.mainSupplier(mainSupplier).click();
        energyPage.nextButton.click();

    }

    @When("the user should choose electricity tariff")
    public void the_user_should_choose_electricity_tariff() {
        electricityPage.getOtherTariff().selectByVisibleText(otherTariff);

    }

    @When("the user should click economymeter button")
    public void the_user_should_click_economymeter_button() {
        electricityPage.economyMeter.click();

    }

    @When("the user should choose main source tab")
    public void the_user_should_choose_main_source_tab() {
        electricityPage.mainSource.click();

    }

    @When("the user should choose current electricity usage")
    public void the_user_should_choose_current_electricity_usage() {
        electricityPage.currentElectricityUsage.click();
        electricityPage.usageAmount.sendKeys("100");

    }

    @Then("the pounds period dropdown should have")
    public void the_pounds_period_dropdown_should_have(List<String> dropdownOptions) {
        Select select = new Select(electricityPage.usagePeriod);
        List<String> actualOptions = browserUtils.getElementsText(select.getOptions());
        Assert.assertEquals("Verify the options", dropdownOptions, actualOptions);

    }

    @Then("the user should click pounds period")
    public void the_user_should_click_pounds_period() {
        electricityPage.usagePeriod.click();
    }

    @Then("the user should choose date range")
    public void the_user_should_choose_date_range() {
        electricityPage.dayInput.sendKeys("05");
        electricityPage.monthInput.sendKeys("06");
        electricityPage.yearInput.sendKeys("2020");

    }

}

