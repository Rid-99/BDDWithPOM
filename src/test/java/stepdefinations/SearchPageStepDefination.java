//package stepdefinations;
//
//import org.junit.Assert;
//
//import base.TestBase;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import page.PurchasePage;
//import page.SearchPage;
//import page.PurchasePage;
//
//public class SearchPageStepDefination extends TestBase {
//	
//	SearchPage searchPage;
//	PurchasePage purchasePage;
//	
//	public SearchPageStepDefination() {
//		super();
//	}
//	
//	@Given("^user is already on Home Page$")
//	public void user_is_already_on_Home_Page() throws Throwable {
//		initialization();
//	}
//
//	@When("^title of Home page is \"([^\"]*)\"$")
//	public void title_of_Home_page_is(String a) throws Throwable {
//		searchPage = new SearchPage();
//		String actualTitle = searchPage.validateHomePagetitle();
//		String expectedTitle = a;
//		Assert.assertEquals(expectedTitle, actualTitle);
//	}
//
//	@Then("^user search watch on searchbar$")
//	public void user_search_watch_on_searchbar() throws Throwable {
//		searchPage = searchPage.googleStoreSearchBar(prop.getProperty("search"));
//	}
//
//	@When("^title of search page is \"([^\"]*)\"$")
//	public void title_of_search_page_is(String b) throws Throwable {
//		String actualTitle = searchPage.verifySearchPagetitle();
//		String expectedTitle = b;
//		Assert.assertEquals(expectedTitle, actualTitle);
//	}
//		
//	@Then("^user clicks on \"([^\"]*)\"$")
//	public void user_clicks_on(String watch) throws Throwable {
//		searchPage.clickOnGooglePixelWatch();
//	}
//		
//	@When("^title of product page is \"([^\"]*)\"$")
//	public void title_of_product_page_is(String c) throws Throwable {
//		String actualTitle = purchasePage.verifyProductPagetitle();
//		String expectedTitle = c;
//		Assert.assertEquals(expectedTitle, actualTitle);
//	}
//		
//	@Then("^user clicks on buy button$")
//	public void user_clicks_on_buy_button() throws Throwable {
//		purchasePage.clickOnBuyButton();
//	}
//		
//	@When("^title of product summary page is \"([^\"]*)\"$")
//	public void title_of_product_summary_page_is(String arg1) throws Throwable {
//		String actualTitle = purchasePage.verifySummaryPagetitle();
//		String expectedTitle = "Google Pixel Watch – Google Store";
//		Assert.assertEquals(expectedTitle, actualTitle);
//	}
//	
//	@Then("^user quit$")
//	public void user_quit() throws Throwable {
//		searchPage.closeBrowser();
//	}
//}
//
