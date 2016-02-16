

var Datastore = require('nedb'),
    db = new Datastore({ filename: './database/lunch.db', autoload: true });

/////
var restaurants = [{
    type: 'restaurant',
    name: 'Japanica',
    tags: ['vg', 'japanies', 'nudels']
}, {
    type: 'restaurant',
    name: 'Giraff',
    tags: ['vg', 'Assian', 'nudels']
},
{
    type: 'restaurant',
    name: 'Mosess',
    tags: ['meat', 'hamburger']
},
{
    type: 'restaurant',
    name: 'Aroma',
    tags: ['vg', 'coffee', 'salad']
},
{
    type: 'restaurant',
    name: 'McDonalds',
    tags: ['meat', 'hamburger']
},
{
    type: 'restaurant',
    name: 'Joya',
    tags: ['vg', 'pasta', 'pizza']
}];

var users = [{
    type: 'user',
    username: 'Adi',
    displayName: 'Adi',
    tags: []
}, {
    type: 'user',
    username: 'Evyatar',
    displayName: 'Evyatar',
    tags: []
}];
var allEntities = restaurants.concat(users);

db.insert(allEntities, function(err, newDoc) { // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
});

/*db.find({ type: 'restaurant' }, function(err, docs) {
    // docs is an array containing documents Mars, Earth, Jupiter
    // If no document is found, docs is equal to []
    console.log('restaurants:   ' + docs);
});*/

/*db.find({ type: 'user' }, function(err, docs) {
    // docs is an array containing documents Mars, Earth, Jupiter
    // If no document is found, docs is equal to []
    console.log('users:   ' + docs);
});*/
/////


