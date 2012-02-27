var cfg = require("./cfg");
var fh = require("fh-fhc");
var assert = require("assert");

var libs = {
	doAct : function(action, params, callback) {
		params.target = 'test';
		params.ts = Date.now();
		console.log("\n***************************\n** " + action + ' params :: ' + JSON.stringify(params));
		fh.act([cfg.instId, action, JSON.stringify(params)], function(err, res) {
			console.log("\n********\n response:\n" + JSON.stringify(res));
			callback(err, res);
		});
	},
	runTestCase : function(testCase) {
		var action = testCase.action;
		var params = testCase.params;
		var name = testCase.name;
		var assertFunc = testCase['assert'];

		console.log("\nStart test case:" + name + " at " + new Date());
		this.doAct(action, params, function(err, res) {
			assert.ifError(err);
			assertFunc(res);
			console.log("\ntest case:" + name + " has finished at:" + new Date());
		});
	},
	runTestCases : function(arrTestCase) {
		for(var i = 0; i < arrTestCase.length; i++) {
			var testCase = arrTestCase[i];
			this.runTestCase(testCase);
		}
	},
	init : function(cb) {
		fh.fhc.load(function(err) {
			cb();
		});
	}
}

module.exports = libs;
