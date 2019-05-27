package stepDefinition;

import cucumber.api.java.After;
//import cucumber.api.java.Before;

public class Hooks {
@After("@mobTest")
public void beforeValidations()
{
	System.out.println("BEFORE IS PRINTING");
}
}

