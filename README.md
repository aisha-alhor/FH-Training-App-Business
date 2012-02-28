# Unit Tests for Cloud
===========================================
TDD Applied to FeedHenry App


## Requirement

* Node.js
	Node.js is a platform for building network applications. Used as FeedHenry Cloud development platform.
	Doc & installation: http://nodejs.org/#

* Expresso
	Expresso is a JavaScript TDD framework written for nodejs. 
	Doc & Installation: http://visionmedia.github.com/expresso/

* FHC
	FeedHenry Node.js Module


## Principle

* Use FHC to send request to cloud and retrieve data to local
* Write test cases locally using Node.js. Assert retrieved data from FHC with expected data.
* Use Expresso to drive/manage test cases


## Example Source Code

* Github: https://github.com/feedhenry/FH-Training-App-Business
* Branch: test
  
  
  
  
  
# A Good Practice
==================================================
Write Unit Test with FeedHenry App


## Prepare

* Create a test folder in the root of the project
* The structure of the test folder would be like:
			!!!!!!!!!!!!!!!!   IMG HERE  !!!!!!!!!!!!!!!!!!!!!!!!


## Structure

* TestCases folder stores test case files
* cfg.js - User Configuration
* lib.js - Test library
* runTests.js - Test runner, invoked by Expresso

For more information please checkout the example source code.


## Configuration

	module.exports={
		 instId:"r-Wd30IrfSV62V4rjhyI-BbU”
	}

* instId: App unique instance ID in FeedHenry Platform. To collect this ID, open your project in the FeedHenry Platform, and
  in the Details page, press "Ctrl+Alt+G" together. Instance Id will be popped out.


## FHC

* Before you run tests for a project, you have to set up your local FHC targeting the domain where your project is hosted.
  Besides, you have to login to FHC so that you have the permission to interact wit your project. Check out FeedHenry FHC.

* Example:

	`fhc target apps.feedhenry.com`

	`fhc login username password`


## Test Cases

* It is recommended to categorise your test cases by your cloud services in different files in a folder (TestCases folder).
* A test case file could contain multiple test cases for one cloud service.


## Test Case Examples

	{
		name:"Get Stock Symbol and Stock Info of Apple Company", //Test Case name
		action:"getStockInfo",  // $fh,act action name. Cloud method name.
		params:{   // $fh.act parameter. Cloud method parameter.
			"name":"apple"
		},
		assert:function(res){ // $fh.act callback with result.
			// Assertions.
			assert.equal(res.stockSymbol,"AAPL","Stock symbol for Apple should be AAPL");
			assert(res.stockInfo.length>0);
		}
	}


## Test Case File

* One Test Case file matches one cloud-side endpoint
* One Test Case file could contain multiple test cases
* Example:

		modules.exports=[ //Node.js Exports
			{
			//Test Case one
			},
			{
			// Test Case Two
			}
		];


## Test Runner

* Defined in runTests.js
* Example Code:

		//include library
		var lib = require("./lib"); 

		var tests = {
			//Test Stock Service.
			testStockService : function() {
				//Init Lib (FHC etc)
				lib.init(function() {
					//Retrieve all test cases defined for stock service from test case file.
					var stockCases = require("./TestCases/test_stock");
					//Run these test cases in parallel
					lib.runTestCases(stockCases);
				});
			},
			testMortgageService:function(){
				lib.init(function(){
					var mortCases=require("./TestCases/test_mortgage");
					lib.runTestCases(mortCases);
				});
			}
		}

		//export all test functions
		module.exports = tests;


## Run Tests

Once Expresso has installed. In CLI:

* Run all tests:  
    `expresso ./runTests.js`

* Run one test:  
    `expresso -o testStockService`  
    `./runTests.js`
  
  
  
  
  
# Advanced
==========================================================================
More useful stuff with Cloud-side unit tests


## Test Driven Development

* Write test cases first before developing projects
* Test cases drive development
* Failures are GOOD
* Acceptance test. Description, not implementation
* Maintainability


## Failure

* Failures are development goals which mean code/implementation required.
* Failure makes sure those issues are monitored by test cases.
* For example, in our sample project, the failure is telling us there is a bug in our project! This is good!


## More Test Cases

* Write as many test cases as you can for a cloud service
* Test cases are not implementation. It is the description of service.
* Write test cases before implementation. Add test cases once a bug has emerged.
* Run test cases when cloud implementation has changed.


## Homework

* Add another test case for getMortgage Service.
	Hint: 	Open test_mortgage.js file. Add a test case JSON object in tests array.
* Add one test case file for newRequest Service with one test case.
	Hint: 	Create test_newRequest.js file. Add test case and export test case array.
			Add test entry in runTests.js


