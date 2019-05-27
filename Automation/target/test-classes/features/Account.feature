Feature: Account Login
@sanity
Scenario: Home Page Default Login
Given User is on netbanking Landing Page
When User Login into the Application with "DDD" anme and "ABC"
Then Home page is populated
And Cards displayed "false"