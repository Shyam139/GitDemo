package stepDefinition;


import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinition {
@Given("^User is on netbanking Landing Page$")
public void use_login()
{
	System.out.println("User successfully logged In");
}
@When("^User Login into the Application with \"([^\"]*)\" anme and \"([^\"]*)\"$")
public void user_Login_into_the_Application_with_anme_and(String arg1, String arg2) throws Throwable {
    System.out.println(arg1);
    System.out.println(arg2);
 //   throw new PendingException();
}
@When("^User Signup with following details$")
public void signup(DataTable data)
{
List<List<String>> l=data.raw();
for(int i=0;i<4;i++)
System.out.println(l.get(0).get(i));
}

@Then("^Home page is populated$")
public void homepage()
{
 System.out.println("Home page populated successfully");
}

@When("^User Signup with user name(.+) and password(.+)$")
public void user_signup_with_user_name_and_password(String username, String password) throws Throwable {
    System.out.println(username);
    System.out.println(password);
}

@And("^Cards displayed \"([^\"]*)\"$")
public void cards_displayed(String arg1) throws Throwable {
   System.out.println(arg1);

}

@Given("^Properties set for browser$")
public void properties_set_for_browser() throws Throwable {
    System.out.println("Properties set for browser");
}

@When("^Invoke Chrome browser$")
public void invoke_chrome_browser() throws Throwable {
	System.out.println("Invoke Chrome browser");
}

@Then("^Chrome browser loaded$")
public void chrome_browser_loaded() throws Throwable {
	System.out.println("Chrome browser loaded");
}
}