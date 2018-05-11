let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

	let x = 0;
	let y = 1;

	callback(null, 'Hopes X');
}