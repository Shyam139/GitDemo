Feature: Application Login

#Background:
#Given Properties set for browser
#When Invoke Chrome browser
#Then Chrome browser loaded

@smoke
Scenario: Home Page Default Login
Given User is on netbanking Landing Page
When User Login into the Application with "Shyam" anme and "1234"
Then Home page is populated
And Cards displayed "true"

@sanity
Scenario: Home Page Default Login
Given User is on netbanking Landing Page
When User Login into the Application with "Achu" anme and "4567"
Then Home page is populated
And Cards displayed "false"

@regression
Scenario: Home Page Default Login
Given User is on netbanking Landing Page
When User Signup with following details
|shyam|IT Analyst|TCS|Kochi|
Then Home page is populated
And Cards displayed "false"


@mobTest
Scenario Outline: Home Page Default Login
Given User is on netbanking Landing Page
When User Signup with user name<UserName> and password<Password>
Then Home page is populated
And Cards displayed "false"

Examples:
|UserName|Password|
|Shyam|123|
|Achu|234|
|Ammu|345|

