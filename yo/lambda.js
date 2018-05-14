let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

	let x = 0;
	let y = 1;

	console.log("Test");
	callback(null, 'Hopes X');
}