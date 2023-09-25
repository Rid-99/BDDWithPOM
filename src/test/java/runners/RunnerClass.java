package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//import io.cucumber.junit.CucumberOptions;
//import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		//the path of the feature files
		features = {"/Users/riddhi/Desktop/QA/SeleniumWorkSpace/BDDWithPOM/src/test/java/features"},
	    
		//step Defination Package Name		
		glue={"stepdefinations"},
		
		//to generate different types of reporting
		format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, 
		
		//display the console output in a proper readable format
		monochrome = true, 
		
		//it will check if any step is not defined in step definition file
		strict = true, 
		
	    //to check the mapping is proper between feature file and step def file
		dryRun = false 
		
		//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"} -- ignore particular test (~)
		)

    //ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as @SmokeTest OR @RegressionTest
	//ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests tagged as @SmokeTest AND @RegressionTest
	

public class RunnerClass {

}
