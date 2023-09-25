$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchPage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Googel Store Search Page",
  "description": "",
  "id": "googel-store-search-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 21,
  "name": "Search Watch on Home Page",
  "description": "",
  "id": "googel-store-search-page;search-watch-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "user is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of Home page is \"Google Store for Google Made Devices \u0026 Accessories\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user search watch on searchbar",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "title of search page is \"Search results for: watch – Google Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user clicks on \"Google Pixel Watch\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "title of product page is \"Google Pixel Watch – Google Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user clicks on buy button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "title of product summary page is \"Google Pixel Watch – Google Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchasePageStepDefination.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 9333325347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Store for Google Made Devices \u0026 Accessories",
      "offset": 23
    }
  ],
  "location": "PurchasePageStepDefination.title_of_Home_page_is(String)"
});
formatter.result({
  "duration": 57770692,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_search_watch_on_searchbar()"
});
formatter.result({
  "duration": 3473114507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search results for: watch – Google Store",
      "offset": 25
    }
  ],
  "location": "PurchasePageStepDefination.title_of_search_page_is(String)"
});
formatter.result({
  "duration": 8957116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Pixel Watch",
      "offset": 16
    }
  ],
  "location": "PurchasePageStepDefination.user_clicks_on(String)"
});
formatter.result({
  "duration": 3211071698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Pixel Watch – Google Store",
      "offset": 26
    }
  ],
  "location": "PurchasePageStepDefination.title_of_product_page_is(String)"
});
formatter.result({
  "duration": 475435361,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_clicks_on_buy_button()"
});
formatter.result({
  "duration": 223507281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Pixel Watch – Google Store",
      "offset": 34
    }
  ],
  "location": "PurchasePageStepDefination.title_of_product_summary_page_is(String)"
});
formatter.result({
  "duration": 79464916,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_quit()"
});
formatter.result({
  "duration": 274398058,
  "status": "passed"
});
formatter.uri("homePage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 20,
      "value": "##############################################"
    }
  ],
  "line": 22,
  "name": "Googel Store Home Page",
  "description": "",
  "id": "googel-store-home-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 24,
  "name": "Search Watch on Home Page",
  "description": "",
  "id": "googel-store-home-page;search-watch-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "title of Home page is \"Google Store for Google Made Devices \u0026 Accessories\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user search watch on searchbar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "title of search page is \"Search results for: watch – Google Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchasePageStepDefination.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 5466235350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Store for Google Made Devices \u0026 Accessories",
      "offset": 23
    }
  ],
  "location": "PurchasePageStepDefination.title_of_Home_page_is(String)"
});
formatter.result({
  "duration": 14332523,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_search_watch_on_searchbar()"
});
formatter.result({
  "duration": 3408450990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search results for: watch – Google Store",
      "offset": 25
    }
  ],
  "location": "PurchasePageStepDefination.title_of_search_page_is(String)"
});
formatter.result({
  "duration": 10477860,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_quit()"
});
formatter.result({
  "duration": 232672426,
  "status": "passed"
});
formatter.uri("purchasePage.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Googel Store Purchase Page",
  "description": "",
  "id": "googel-store-purchase-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 22,
  "name": "Purchase watch on google store",
  "description": "",
  "id": "googel-store-purchase-page;purchase-watch-on-google-store",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "title of Home page is \"Google Store for Google Made Devices \u0026 Accessories\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user search watch on searchbar",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "title of search page is \"Search results for: watch – Google Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user clicks on \"Google Pixel Watch\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "title of product page is \"Google Pixel Watch – Google Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user clicks on buy button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "title of product summary page is \"Google Pixel Watch – Google Store\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user choose color and check images",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user clicks on add to basket button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "label is \"Added\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user clicks on go to basket button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user is on basket page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user quit",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchasePageStepDefination.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 5542515722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Store for Google Made Devices \u0026 Accessories",
      "offset": 23
    }
  ],
  "location": "PurchasePageStepDefination.title_of_Home_page_is(String)"
});
formatter.result({
  "duration": 18346392,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_search_watch_on_searchbar()"
});
formatter.result({
  "duration": 3435725089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search results for: watch – Google Store",
      "offset": 25
    }
  ],
  "location": "PurchasePageStepDefination.title_of_search_page_is(String)"
});
formatter.result({
  "duration": 9671287,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Pixel Watch",
      "offset": 16
    }
  ],
  "location": "PurchasePageStepDefination.user_clicks_on(String)"
});
formatter.result({
  "duration": 3180721381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Pixel Watch – Google Store",
      "offset": 26
    }
  ],
  "location": "PurchasePageStepDefination.title_of_product_page_is(String)"
});
formatter.result({
  "duration": 367925722,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_clicks_on_buy_button()"
});
formatter.result({
  "duration": 224386845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Pixel Watch – Google Store",
      "offset": 34
    }
  ],
  "location": "PurchasePageStepDefination.title_of_product_summary_page_is(String)"
});
formatter.result({
  "duration": 54172725,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_choose_color_and_check_images()"
});
formatter.result({
  "duration": 8938049666,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_clicks_on_add_to_basket_button()"
});
formatter.result({
  "duration": 175199261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added",
      "offset": 10
    }
  ],
  "location": "PurchasePageStepDefination.label_is(String)"
});
formatter.result({
  "duration": 1790265999,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_clicks_on_go_to_basket_button()"
});
formatter.result({
  "duration": 3201367404,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_is_on_basket_page()"
});
formatter.result({
  "duration": 7163488,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefination.user_quit()"
});
formatter.result({
  "duration": 284421149,
  "status": "passed"
});
});