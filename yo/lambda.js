let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

	let x = 0;
	let y = 1;
	ddb.get({
		TableName: 'BookingInfoAnomalies',
		Key: { 'ResellerID': 'hi', 'BookingRef': 'hi' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});

	console.log("Test");
	callback(null,"Hi");
}