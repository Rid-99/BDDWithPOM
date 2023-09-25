package page;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.TestBase;

public class HomePage extends TestBase {

	@FindBy(xpath = "//div[@class='gn5mEf uFvxge']")
	public WebElement searchbutton;
	
	@FindBy(xpath = "//input[@placeholder='Search Google Store']")
	public WebElement searchBar;

	public HomePage() {
		PageFactory.initElements(driver, this);
	}

	public String validateHomePagetitle() {
		return driver.getTitle();
	}
	
	public SearchPage googleStoreSearchBar(String s) throws InterruptedException {
 		searchbutton.click();
		searchBar.sendKeys(s + Keys.ENTER);
		Thread.sleep(3000);
		return new SearchPage();
	}
	
	public void closeBrowser() {
		driver.quit();
	}
	
}
