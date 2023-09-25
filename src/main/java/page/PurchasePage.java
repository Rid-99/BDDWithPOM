package page;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import base.TestBase;

public class PurchasePage extends TestBase {

	@FindBy(xpath = "//div[@class='gn5mEf uFvxge']")
	public WebElement searchbutton;
	
	@FindBy(xpath = "//input[@placeholder='Search Google Store']")
	public WebElement searchBar;
	
	@FindBy(xpath = "(//a[@class='P0LaXe'])[1]")
	public WebElement watch;
	
	@FindBy (xpath = "//bento-button[@doc-id='google_pixel_watch']")
	public WebElement buyButton;
	
	@FindBy(xpath = "//button[@aria-label='Image 1 of 4']//div[@class='k0gjyf']")
	public WebElement Image1;
	
	@FindBy(xpath = "//button[@aria-label='Image 2 of 4']//div[@class='k0gjyf']")
	public WebElement Image2;
	
	@FindBy(xpath = "//button[@aria-label='Image 3 of 4']//div[@class='k0gjyf']")
	public WebElement Image3;
	
	@FindBy(xpath = "//button[@aria-label='Image 4 of 4']//div[@class='k0gjyf']")
	public WebElement Image4;
	
	@FindBy(xpath = "//button[@data-docid='_pixwatch_silvwhi_lte_unlocked']")
	public WebElement chalkActiveband;
	
	@FindBy(xpath = "//div[@class='mbdsle']//button")
	public WebElement addToBasket;
	
	@FindBy(xpath = "//div[@class='oL9OSd']//button")
	public WebElement goToBasketButton;
	
	@FindBy(xpath = "(//div[@class='noqMHd'])[1]")
	public WebElement addedLabel;

	public PurchasePage() {
		PageFactory.initElements(driver, this);
	}
	
	public String validateHomePagetitle() {
		return driver.getTitle();
	}
	
	public void googleStoreSearchBar(String s) throws InterruptedException {
 		searchbutton.click();
		searchBar.sendKeys(s + Keys.ENTER);
		Thread.sleep(3000);
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
	
	public void clickOnBuyButton() {
		buyButton.click();
	}
	
	public String verifySummaryPagetitle() {
		return driver.getTitle();
	}
	
	public void clickOnImages() throws InterruptedException {
		Image1.click();
		Thread.sleep(1500);
		Image2.click();
		Thread.sleep(1500);
		Image3.click();
		Thread.sleep(1500);
		Image4.click();
		Thread.sleep(1500);
	}
	
	public void clickOnchalkActiveband() throws InterruptedException {
		chalkActiveband.click();
		Thread.sleep(1500);
	}

	
	public void clickOnAddtoBasket() {			
		addToBasket.click();
	}
	
	public String validateAddedLabel() {
		return addedLabel.getText();
	}
	
	public BasketOverviewPage clickonGoToBasketButton() throws InterruptedException {
		goToBasketButton.click();
		Thread.sleep(3000);
		return new BasketOverviewPage();
	}
	
	public String verifyBasketPagetitle() {
		return driver.getTitle();
	}
	
	public void closeBrowser() {
		driver.quit();
	}
}
