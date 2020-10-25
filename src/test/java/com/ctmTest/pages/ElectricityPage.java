package com.ctmTest.pages;

import com.ctmTest.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;


public class ElectricityPage {

    public ElectricityPage() {
        PageFactory.initElements(Driver.getDriver(), this);

    }

    @FindBy(css = "*[placeholder='Other tariff']")
    public WebElement otherTariff;

    @FindBy(css = "*[name='DoYouHaveAnEconomy7Meter'][value=true]")
    public WebElement economyMeter;

    @FindBy(xpath = "(//div/label/input)[7]")
    public WebElement mainSource;

    @FindBy(css = "*[value='gbp']")
    public WebElement currentElectricityUsage;

    @FindBy(xpath = "(//input[@*='text'])[1]")
    public WebElement usageAmount;

    @FindBy(css = "*[placeholder='Please select...']")
    public WebElement usagePeriod;

    @FindBy(css = "*[aria-label='Day']")
    public WebElement dayInput;

    @FindBy(css = "*[aria-label='Month']")
    public WebElement monthInput;

    @FindBy(css = "*[aria-label='Year']")
    public WebElement yearInput;


    /**
     * This method return specific category select element
     * @return Select
     */
    public Select getOtherTariff() {

        return new Select(otherTariff);
    }

    public WebElement usagePeriod(String tab){
        String xpath = "//input[contains(@value,'"+tab+"') and @name='DoYouHaveYourEnergyBill']";
        return Driver.getDriver().findElement(By.xpath(xpath));
    }

}
