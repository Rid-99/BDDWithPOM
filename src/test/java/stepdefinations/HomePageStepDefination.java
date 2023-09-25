//package stepdefinations;
//
//import org.junit.Assert;
//
//import base.TestBase;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import page.HomePage;
//import page.SearchPage;
//
//public class HomePageStepDefination extends TestBase {
//	
//	HomePage homePage;
//	SearchPage searchPage;
//	
//	public HomePageStepDefination() {
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
//		homePage = new HomePage();
//		String actualTitle = homePage.validateHomePagetitle();
//		String expectedTitle = a;
//		Assert.assertEquals(expectedTitle, actualTitle);
//	}
//
//	@Then("^user search watch on searchbar$")
//	public void user_search_watch_on_searchbar() throws Throwable {
//		searchPage = homePage.googleStoreSearchBar(prop.getProperty("search"));
//	}
//
//	@When("^title of search page is \"([^\"]*)\"$")
//	public void title_of_search_page_is(String b) throws Throwable {
//		String actualTitle = searchPage.verifySearchPagetitle();
//		String expectedTitle = b;
//		Assert.assertEquals(expectedTitle, actualTitle);
//	}
//
//	@Then("^user quit$")
//	public void user_quit() throws Throwable {
//		homePage.closeBrowser();
//	}
//
//}
//
//
