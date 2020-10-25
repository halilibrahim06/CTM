package com.ctmTest.step_definitions;

import com.ctmTest.pages.ElectricityPage;
import com.ctmTest.pages.EnergyPage;
import com.ctmTest.pages.GasPage;
import com.ctmTest.utilities.BrowserUtils;
import io.cucumber.java.en.*;


public class GasStepDefs {

    EnergyPage energyPage = new EnergyPage();
    ElectricityPage electricityPage = new ElectricityPage();
    BrowserUtils browserUtils = new BrowserUtils();
    GasPage gasPage = new GasPage();
    String otherTariff = "Age UK Prepayment";
    String otherGasTariff = "Age UK Higher User Prepayment";


    @When("the user should provide electriciy details")
    public void the_user_should_provide_electriciy_details() {

        electricityPage.getOtherTariff().selectByVisibleText(otherTariff);
        electricityPage.economyMeter.click();
        electricityPage.mainSource.click();
        electricityPage.currentElectricityUsage.click();
        electricityPage.usageAmount.sendKeys("100");
        electricityPage.usagePeriod.click();
        electricityPage.dayInput.sendKeys("05");
        electricityPage.monthInput.sendKeys("06");
        electricityPage.yearInput.sendKeys("2020");
        energyPage.nextButton.click();

    }

    @When("the user should choose gas tariff")
    public void the_user_should_choose_gas_tariff() {
        browserUtils.waitFor(2);
        gasPage.getOtherGasTariff().selectByVisibleText(otherGasTariff);
    }

    @When("the user should choose current gas usage pound period")
    public void the_user_should_choose_current_gas_usage_pound_period() {
        gasPage.currentGasUsage.click();
        gasPage.usageGasAmount.sendKeys("150");

    }
    @When("the user should choose gas date range")
    public void the_user_should_choose_gas_date_range() {
        electricityPage.dayInput.sendKeys("05");
        electricityPage.monthInput.sendKeys("06");
        electricityPage.yearInput.sendKeys("2020");

    }

    @Then("the user should choose tariff interest")
    public void the_user_should_choose_tariff_interest() {
        gasPage.interestTariff.click();

    }

    @When("the user should give email detail")
    public void the_user_should_give_email_detail() {
        gasPage.inputEmail.sendKeys("kefapan912@yamails.net");

    }

    @When("the user should click notification checkbox")
    public void the_user_should_click_notification_checkbox() {
        gasPage.clickEmail.click();

    }
    @Then("the user should click see result button")
    public void the_user_should_click_see_result_button() {
        gasPage.resultButton.click();

    }

}
