var assert=require("assert");


module.exports=[
{
	name:"Get Stock Symble and Stock Info of Apple Company",
	action:"getStockInfo",
	params:{
		"name":"apple"
	},
	assert:function(res){
		assert.equal(res.stockSymbol,"AAPL","Stock symbol for Apple should be AAPL");
		assert(res.stockInfo.length>0);
	}
},
{
	name:"another test get invalid stock: This causes cloud-side error!!",
	action:"getStockInfo",
	params:{
		"name":"I dunno"
	},
	assert:function(res){
		console.log(res);
	}
}
]
