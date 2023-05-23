$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("userstest.feature");
formatter.feature({
  "line": 2,
  "name": "Users Test",
  "description": "As a user admin should add user successfully",
  "id": "users-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "duration": 4791850000,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on admin tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able to verify \"System Users\" text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 202268500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 268666100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 185322400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 869772300,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1350015600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 28
    }
  ],
  "location": "UsersSteps.iShouldBeAbleToVerifyText(String)"
});
formatter.result({
  "duration": 3055009300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Admin should add user successfully",
  "description": "",
  "id": "users-test;admin-should-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I click on add button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I can verify \"Add User\" text",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select user role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter employee name \"Lisa\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter username \"Nirmala\" into username field",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select status \"Disable\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"Smith@123456\"into password field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter confirm password \"Smith@123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I am able to verify message \"Successfully saved\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 1362527300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add User",
      "offset": 14
    }
  ],
  "location": "UsersSteps.iCanVerifyText(String)"
});
formatter.result({
  "duration": 262288200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "UsersSteps.iSelectUserRole(String)"
});
formatter.result({
  "duration": 297216600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lisa",
      "offset": 23
    }
  ],
  "location": "UsersSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "duration": 3285215800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nirmala",
      "offset": 18
    }
  ],
  "location": "UsersSteps.iEnterUsernameIntoUsernameField(String)"
});
formatter.result({
  "duration": 105535100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disable",
      "offset": 17
    }
  ],
  "location": "UsersSteps.iSelectStatus(String)"
});
formatter.result({
  "duration": 2144706100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith@123456",
      "offset": 18
    }
  ],
  "location": "UsersSteps.iEnterPasswordIntoPasswordField(String)"
});
formatter.result({
  "duration": 96912700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith@123456",
      "offset": 26
    }
  ],
  "location": "UsersSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 106754500,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 64193600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully saved",
      "offset": 29
    }
  ],
  "location": "UsersSteps.iAmAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 1330902000,
  "status": "passed"
});
formatter.after({
  "duration": 817472700,
  "status": "passed"
});
formatter.before({
  "duration": 3409550900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on admin tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able to verify \"System Users\" text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 152600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 342632900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 113250100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 886372900,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1750709700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 28
    }
  ],
  "location": "UsersSteps.iShouldBeAbleToVerifyText(String)"
});
formatter.result({
  "duration": 3041952700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Admin search the user created and verify user",
  "description": "",
  "id": "users-test;admin-search-the-user-created-and-verify-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter username \"Nirmala\" into username field",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select user role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should be able to verify the user should be in result list",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Nirmala",
      "offset": 18
    }
  ],
  "location": "UsersSteps.iEnterUsernameIntoUsernameField(String)"
});
formatter.result({
  "duration": 126555400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "UsersSteps.iSelectUserRole(String)"
});
formatter.result({
  "duration": 265394900,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 2073934000,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iShouldBeAbleToVerifyTheUserShouldBeInResultList()"
});
formatter.result({
  "duration": 261723200,
  "status": "passed"
});
formatter.after({
  "duration": 850117800,
  "status": "passed"
});
formatter.before({
  "duration": 2925458100,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on admin tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able to verify \"System Users\" text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 241300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 342992600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 132512000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 990861400,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1572357900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 28
    }
  ],
  "location": "UsersSteps.iShouldBeAbleToVerifyText(String)"
});
formatter.result({
  "duration": 3040368100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify admin should delete the user successfully",
  "description": "",
  "id": "users-test;verify-admin-should-delete-the-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I enter username \"Nirmala\" into username field",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I select user role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should be able to verify the user should be in result list",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I click on check box",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Popup will display",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click on ok button on popup",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I am able to verify text \"Successfully Deleted\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Nirmala",
      "offset": 18
    }
  ],
  "location": "UsersSteps.iEnterUsernameIntoUsernameField(String)"
});
formatter.result({
  "duration": 136647700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "UsersSteps.iSelectUserRole(String)"
});
formatter.result({
  "duration": 232798600,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 2081279200,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iShouldBeAbleToVerifyTheUserShouldBeInResultList()"
});
formatter.result({
  "duration": 250570500,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnCheckBox()"
});
formatter.result({
  "duration": 55634600,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 102657400,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.popupWillDisplay()"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.clickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 171282300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully Deleted",
      "offset": 26
    }
  ],
  "location": "UsersSteps.iAmAbleToVerifyText(String)"
});
formatter.result({
  "duration": 196791700,
  "status": "passed"
});
formatter.after({
  "duration": 876051400,
  "status": "passed"
});
formatter.before({
  "duration": 3244188900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on admin tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able to verify \"System Users\" text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 345212400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 113745200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 93793700,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2026361800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 28
    }
  ],
  "location": "UsersSteps.iShouldBeAbleToVerifyText(String)"
});
formatter.result({
  "duration": 3043737500,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Search the deleted user and verify the message",
  "description": "",
  "id": "users-test;search-the-deleted-user-and-verify-the-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I enter username \"Nirmala\" into username field",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I select user role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I can see message that \"No Records Found\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Nirmala",
      "offset": 18
    }
  ],
  "location": "UsersSteps.iEnterUsernameIntoUsernameField(String)"
});
formatter.result({
  "duration": 90990700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "UsersSteps.iSelectUserRole(String)"
});
formatter.result({
  "duration": 254659900,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 2084145900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No Records Found",
      "offset": 24
    }
  ],
  "location": "UsersSteps.iCanSeeMessageThat(String)"
});
formatter.result({
  "duration": 257807800,
  "status": "passed"
});
formatter.after({
  "duration": 799627500,
  "status": "passed"
});
});