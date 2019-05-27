$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account.feature");
formatter.feature({
  "line": 1,
  "name": "Account Login",
  "description": "",
  "id": "account-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Home Page Default Login",
  "description": "",
  "id": "account-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on netbanking Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Login into the Application with \"DDD\" anme and \"ABC\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.use_login()"
});
formatter.result({
  "duration": 197293826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DDD",
      "offset": 38
    },
    {
      "val": "ABC",
      "offset": 53
    }
  ],
  "location": "stepDefinition.user_Login_into_the_Application_with_anme_and(String,String)"
});
formatter.result({
  "duration": 5623060,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.homepage()"
});
formatter.result({
  "duration": 146448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "stepDefinition.cards_displayed(String)"
});
formatter.result({
  "duration": 1194481,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Background:"
    },
    {
      "line": 4,
      "value": "#Given Properties set for browser"
    },
    {
      "line": 5,
      "value": "#When Invoke Chrome browser"
    },
    {
      "line": 6,
      "value": "#Then Chrome browser loaded"
    }
  ],
  "line": 9,
  "name": "Home Page Default Login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on netbanking Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User Login into the Application with \"Shyam\" anme and \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Cards displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.use_login()"
});
formatter.result({
  "duration": 136580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shyam",
      "offset": 38
    },
    {
      "val": "1234",
      "offset": 55
    }
  ],
  "location": "stepDefinition.user_Login_into_the_Application_with_anme_and(String,String)"
});
formatter.result({
  "duration": 250265,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.homepage()"
});
formatter.result({
  "duration": 106579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 17
    }
  ],
  "location": "stepDefinition.cards_displayed(String)"
});
formatter.result({
  "duration": 376976,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Home Page Default Login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on netbanking Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Login into the Application with \"Achu\" anme and \"4567\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.use_login()"
});
formatter.result({
  "duration": 138554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Achu",
      "offset": 38
    },
    {
      "val": "4567",
      "offset": 54
    }
  ],
  "location": "stepDefinition.user_Login_into_the_Application_with_anme_and(String,String)"
});
formatter.result({
  "duration": 328028,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.homepage()"
});
formatter.result({
  "duration": 112501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "stepDefinition.cards_displayed(String)"
});
formatter.result({
  "duration": 416055,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Home Page Default Login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on netbanking Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User Signup with following details",
  "rows": [
    {
      "cells": [
        "shyam",
        "IT Analyst",
        "TCS",
        "Kochi"
      ],
      "line": 26
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.use_login()"
});
formatter.result({
  "duration": 194211,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.signup(DataTable)"
});
formatter.result({
  "duration": 2725674,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.homepage()"
});
formatter.result({
  "duration": 108948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "stepDefinition.cards_displayed(String)"
});
formatter.result({
  "duration": 201317,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Home Page Default Login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@mobTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on netbanking Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User Signup with user name\u003cUserName\u003e and password\u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 39,
      "id": "application-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "Shyam",
        "123"
      ],
      "line": 40,
      "id": "application-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "Achu",
        "234"
      ],
      "line": 41,
      "id": "application-login;home-page-default-login;;3"
    },
    {
      "cells": [
        "Ammu",
        "345"
      ],
      "line": 42,
      "id": "application-login;home-page-default-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Home Page Default Login",
  "description": "",
  "id": "application-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@mobTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on netbanking Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User Signup with user nameShyam and password123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.use_login()"
});
formatter.result({
  "duration": 185527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shyam",
      "offset": 26
    },
    {
      "val": "123",
      "offset": 44
    }
  ],
  "location": "stepDefinition.user_signup_with_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 2547252,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.homepage()"
});
formatter.result({
  "duration": 1170796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "stepDefinition.cards_displayed(String)"
});
formatter.result({
  "duration": 1212640,
  "status": "passed"
});
formatter.after({
  "duration": 331581,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Home Page Default Login",
  "description": "",
  "id": "application-login;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@mobTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on netbanking Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User Signup with user nameAchu and password234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.use_login()"
});
formatter.result({
  "duration": 181580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Achu",
      "offset": 26
    },
    {
      "val": "234",
      "offset": 43
    }
  ],
  "location": "stepDefinition.user_signup_with_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 306317,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.homepage()"
});
formatter.result({
  "duration": 132633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "stepDefinition.cards_displayed(String)"
});
formatter.result({
  "duration": 284607,
  "status": "passed"
});
formatter.after({
  "duration": 806057,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Home Page Default Login",
  "description": "",
  "id": "application-login;home-page-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@mobTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on netbanking Landing Page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User Signup with user nameAmmu and password345",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards displayed \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.use_login()"
});
formatter.result({
  "duration": 3211599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ammu",
      "offset": 26
    },
    {
      "val": "345",
      "offset": 43
    }
  ],
  "location": "stepDefinition.user_signup_with_user_name_and_password(String,String)"
});
formatter.result({
  "duration": 5561481,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.homepage()"
});
formatter.result({
  "duration": 2115013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "stepDefinition.cards_displayed(String)"
});
formatter.result({
  "duration": 1234350,
  "status": "passed"
});
formatter.after({
  "duration": 163028,
  "status": "passed"
});
});