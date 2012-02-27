var assert = require("assert");

module.exports = [{
	name : "Test Mortgage Service",
	action : "getMortgage",
	params : {
		"years" : "40",
		"interest" : "0.1",
		"loanAmount" : "300000",
		"tax" : "300",
		"insurance" : "300"
	},
	assert:function(res){
		assert.equal(res.MonthlyInsurance,"25","Monthly Insurance should be 25");
		assert.equal(res.MonthlyPrincipalAndInterest,"637.60936894365921","Monthly Principal and Interest is wrong!");
		assert.equal(res.MonthlyTax,"25","Monthly Tax is wrong!");
		assert.equal(res.TotalPayment,"687.60936894365921","Total Payment is wrong!");
	}
}]