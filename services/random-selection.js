var exports = module.exports = {};

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
	res.send('Today we eat at ' + random() + '!!');
	next();
}

