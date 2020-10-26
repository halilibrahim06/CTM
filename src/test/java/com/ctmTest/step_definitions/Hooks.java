package com.ctmTest.step_definitions;

import com.ctmTest.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;


public class Hooks {

    @Before
    public void setUp(){
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

        Driver.getDriver().manage().window().maximize();
    }

    @After
    public void tearDown(Scenario scenario){
        scenario.write("Complete scenario: "+ scenario.getName());
        if (scenario.isFailed()){
            byte[] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot, "image/png", scenario.getName());
        }

        Driver.closeDriver();
    }

}

