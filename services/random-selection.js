var exports = module.exports = {};
var hooksURL = 	'https://hooks.slack.com/services/';

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

function random() {
	return restaurants[Math.floor(Math.random() * restaurants.length)].name;
}
exports.randomSelect = function (req, res, next) {
	
var retUrl = hooksURL + process.env.INCOMING_TOKEN;
console.log(retUrl);
	
	res.send('Today we eat at ' + random() + '!!?');
	next();
}

