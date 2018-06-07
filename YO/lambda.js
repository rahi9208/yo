let AWS = require('aws-sdk');
exports.handler = function (event, context, callback) {

	console.log("My prod log");
	callback(null,"");
}