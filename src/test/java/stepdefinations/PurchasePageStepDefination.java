package stepdefinations;

import org.junit.Assert;

import base.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.BasketOverviewPage;
import page.PurchasePage;

public class PurchasePageStepDefination extends TestBase {
	
	PurchasePage purchasePage;
	BasketOverviewPage basketOverviewPage;	
		
	public PurchasePageStepDefination() {
		super();
	}
		
	@Given("^user is already on Home Page$")
	public void user_is_already_on_Home_Page() throws Throwable {
		initialization();
	}

	@When("^title of Home page is \"([^\"]*)\"$")
	public void title_of_Home_page_is(String a) throws Throwable {
		purchasePage = new PurchasePage();
		String actualTitle = purchasePage.validateHomePagetitle();
		String expectedTitle = a;
		Assert.assertEquals(expectedTitle, actualTitle);
	}

	@Then("^user search watch on searchbar$")
	public void user_search_watch_on_searchbar() throws Throwable {
		purchasePage.googleStoreSearchBar(prop.getProperty("search"));
	}

	@When("^title of search page is \"([^\"]*)\"$")
	public void title_of_search_page_is(String b) throws Throwable {
		String actualTitle = purchasePage.verifySearchPagetitle();
		String expectedTitle = b;
		Assert.assertEquals(expectedTitle, actualTitle);
	}
		
	@Then("^user clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String watch) throws Throwable {
		purchasePage.clickOnGooglePixelWatch();
	}
		
	@When("^title of product page is \"([^\"]*)\"$")
	public void title_of_product_page_is(String c) throws Throwable {
		String actualTitle = purchasePage.verifyProductPagetitle();
		String expectedTitle = c;
		Assert.assertEquals(expectedTitle, actualTitle);
	}
		
	@Then("^user clicks on buy button$")
	public void user_clicks_on_buy_button() throws Throwable {
		purchasePage.clickOnBuyButton();
	}
		
	@When("^title of product summary page is \"([^\"]*)\"$")
	public void title_of_product_summary_page_is(String arg1) throws Throwable {
		String actualTitle = purchasePage.verifySummaryPagetitle();
		String expectedTitle = "Google Pixel Watch – Google Store";
		Assert.assertEquals(expectedTitle, actualTitle);
	}
	
	@Then("^user choose color and check images$")
	public void user_choose_color_and_check_images() throws Throwable {
	    purchasePage.clickOnchalkActiveband();
	    purchasePage.clickOnImages();
	}

	@Then("^user clicks on add to basket button$")
	public void user_clicks_on_add_to_basket_button() throws Throwable {
	    purchasePage.clickOnAddtoBasket();
	}

	@When("^label is \"([^\"]*)\"$")
	public void label_is(String d) throws Throwable {
		String actualLabel = purchasePage.validateAddedLabel();
		String expectedLabel = d;
		Assert.assertEquals(expectedLabel, actualLabel);
	}

	@Then("^user clicks on go to basket button$")
	public void user_clicks_on_go_to_basket_button() throws Throwable {
	    purchasePage.clickonGoToBasketButton();
	}

	@Then("^user is on basket page$")
	public void user_is_on_basket_page() throws Throwable {
		String actualTitle = purchasePage.verifyBasketPagetitle();
		String expectedTitle = "Shopping basket – Google Store";
		Assert.assertEquals(expectedTitle, actualTitle);
	}
		
	@Then("^user quit$")
	public void user_quit() throws Throwable {
		purchasePage.closeBrowser();
	}
}

