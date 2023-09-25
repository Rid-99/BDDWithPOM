#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Googel Store Search Page

Scenario: Search Watch on Home Page

Given user is already on Home Page
When title of Home page is "Google Store for Google Made Devices & Accessories"
Then user search watch on searchbar
When title of search page is "Search results for: watch – Google Store"
Then user clicks on "Google Pixel Watch"
When title of product page is "Google Pixel Watch – Google Store"
Then user clicks on buy button
When title of product summary page is "Google Pixel Watch – Google Store"
Then user quit

