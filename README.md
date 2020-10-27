# CTM Test

TOOLS AND EXPLANATIONS
The project has been prepared based on Cucumber BDD style.
Maven build management tool is used in this project by Java (JDK8+) language.
In the project created by using the Page Object Design Pattern, the data were collected under the pages package.
Dependencies have been prepared under the pom.xml file. Webdriver Manager dependency was used from this project.
The project was tried to be controlled from the centre using configuration.properties and ConfigurationReader.
Driver based on Singleton Design Pattern was used and parallel testing was supported with driverPool. (In the pom.xml parallel,perCoreThreadCount,threadCountMethods)

**Technology Stack**

•	Java

•	Selenium WebDriver

•	Maven

•	Cucucmber

•	JUnit

**Prerequisites**

•	Windows

•	Java 1.8 - Java Dev Kit

•	Maven - Dependency Manager

•	IntelliJ IDEA – IDE


**HOW TO RUN TESTS**
'''
-> Under the runners package "CukesRunner" right click and run CukesRunner. 
Also path "src > test > java > com > ctmTest > runners > CukesRunner"
-> mvn verify --> in the IDE console or navigate project path in command line and run.
'''

**HOW TO CREATE TEST REPORTS**

1-) When you run tests with the "mvn verify" command from the console, you can see Cucumber Html Report under the target file.
-> target -> cucumber-html-reports > overview-steps.html (open with chrome option)

2-) Second type of report, the project is run from Runner class, a Cucumber Report link is created in the IDE console automatically.
Sample link -> View your Cucumber Report at: (Works 24 hours later than it will delete automatically)

http://localhost:63342/CTM/target/cucumber-html-reports/overview-steps.html


3-) The Driver, pom.xml and console are ready for Parallel testing. Type mvn verify -Dbrowser-firefox from the console and the relevant browser will open automatically. 
The only feature is thread one.

4-) To run a special tag, when you type @001 in the tags (tags = "@001") section in the Runner, only that tag will work specifically. 
It also works exclusively in the console with mvn verify -Dcucumber.options = "- tags 002". 
Also mvn verify -Dcucumber.options = "- tags 003" -Dbrowser = chrome-headles is another option.

**Halil Erdogan**

QA Automation Engineer | SDET

https://www.linkedin.com/in/ha-lil-erdogan-b6b2a71b4

