package com.ctmTest.pages;


import com.ctmTest.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class GasPage {

    public GasPage() {
        PageFactory.initElements(Driver.getDriver(), this);

    }

    @FindBy(css = "*[placeholder='Other tariff']")
    public WebElement otherGasTariff;

    @FindBy(css = "*[value='gbp']")
    public WebElement currentGasUsage;

    @FindBy(xpath = "(//input[@*='text'])[1]")
    public WebElement usageGasAmount;

    @FindBy(css = "*[value='fixed']")
    public WebElement interestTariff;

    @FindBy(css = "*[type='email']")
    public WebElement inputEmail;

    @FindBy(css = "*[value='email']")
    public WebElement clickEmail;

    @FindBy(css = "*[type='submit']")
    public WebElement resultButton;

    /**
     * This method return specific category select element
     * @return Select
     */
    public Select getOtherGasTariff() {

        return new Select(otherGasTariff);
    }

}

