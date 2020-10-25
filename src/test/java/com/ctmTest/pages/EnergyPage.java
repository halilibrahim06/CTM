package com.ctmTest.pages;

import com.ctmTest.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;


public class EnergyPage {

    public EnergyPage() {
        PageFactory.initElements(Driver.getDriver(), this);

    }

    @FindBy(xpath = "(//input)[1]")
    public WebElement postcodeBox;

    @FindBy(css = "*[name='otherdualSupplier']")
    public WebElement dropdownSupplier;

    @FindBy(xpath = "//button[@*='submit']")
    public WebElement nextButton;

    public WebElement getBill(String tab) {
        String xpath = "//input[contains(@value,'"+tab+"') and @name='DoYouHaveYourEnergyBill']";
        return Driver.getDriver().findElement(By.xpath(xpath));
    }

    public WebElement getType(String sort) {
        String xpath = "//input[contains(@value,'" + sort + "') and @name='WhatWouldYouLikeToCompare']";
        return Driver.getDriver().findElement(By.xpath(xpath));
    }

    public WebElement supplierTab(String supplier) {
        String xpath = "//input[contains(@value,'" + supplier + "') and @name='IsYourGasAndElectricityFromSameSupplier']";
        return Driver.getDriver().findElement(By.xpath(xpath));
    }

    public WebElement mainSupplier(String mainsupplier) {
        String css = "input[id*='" + mainsupplier + "'][name='dualPicker']";
        return Driver.getDriver().findElement(By.cssSelector(css));
    }

    /**
     * This method return specific category select element
     *
     * @return Select
     */
    public Select getSupplierDropDown() {

        return new Select(dropdownSupplier);
    }


}

