package page;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.TestBase;

public class SearchPage extends TestBase{
 	
	@FindBy(xpath = "//div[@class='gn5mEf uFvxge']")
	public WebElement searchbutton;
	
	@FindBy(xpath = "//input[@placeholder='Search Google Store']")
	public WebElement searchBar;
	
	@FindBy(xpath = "(//a[@class='P0LaXe'])[1]")
	public WebElement watch;
	
	@FindBy (xpath = "//bento-button[@doc-id='google_pixel_watch']")
	public WebElement buyButton;

	public SearchPage() {
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
	
	public String verifySearchPagetitle() {
		return driver.getTitle();
	}
	
	public void clickOnGooglePixelWatch() throws InterruptedException {
		watch.click();
		Thread.sleep(3000);
	}	
	
	public String verifyProductPagetitle() {
		return driver.getTitle();
	}
	
	public PurchasePage clickOnBuyButton() {
		buyButton.click();
		return new PurchasePage();
	}
	
	public void closeBrowser() {
		driver.quit();
	}
	
}
