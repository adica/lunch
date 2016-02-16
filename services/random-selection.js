var exports = module.exports = {};
var hooksURL = 	'https://hooks.slack.com/services/';
var request_lib = require('request');


var restaurants = [
	{"name" : "mosess"},
	{"name" : "giraff"},
	{"name" : "השמן"},
	{"name" : "pasta-mia"},
	{"name" : "shemesh"},
	{"name" : "pizza-hut"},
	{"name" : "mcdonalds"},
	{"name" : "japanyka"} 
];

var users = [
	{"username":"evyatar", "preferences":"vegeterian"},
	{"username":"adic", "preferences":"vegeterian"},
	{"username":"dudu.basher", "preferences":"kosher"}
];

function random() {
	return restaurants[Math.floor(Math.random() * restaurants.length)].name;
}

function sendToAll(message) {
	for (var i = 0 ; i < users.length ; i++) {
		console.log( users[i].username );
		sendToUser(users[i].username, message);
	}
	
}

function sendToUser(username, message) {
	var bodytext = '{"channel": "@' + username + '", "username": "lunch-bot","text": "' + message + '"}'
	request_lib.post({
        		url: hooksURL + process.env.INCOMING_TOKEN,
       			body: bodytext
         	}, 
         	function(error, response, body){
            	console.log(body);
    		}
    );
}

exports.randomSelect = function (req, res, next) {
	
	var retUrl = hooksURL + process.env.INCOMING_TOKEN;
	console.log(retUrl);
	var todaysRestaurant = random() ;
	res.send('Today we eat at ' + todaysRestaurant + '!!?');
	//sendToUser("evyatar", "today we eat at " + todaysRestaurant);
	sendToAll("today we eat at " + todaysRestaurant);
	next();
}

