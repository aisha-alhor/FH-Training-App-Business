/**
 * Run all unit tests
 */

var lib = require("./lib");

var tests = {
	testStockService : function() {
		lib.init(function() {
			var stockCases = require("./TestCases/test_stock");
			
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

module.exports = tests;
