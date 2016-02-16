Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

var exports = module.exports = {},
    hooksURL = 'https://hooks.slack.com/services/',
    request_lib = require('request'),
    Datastore = require('nedb'),
    db = new Datastore({ filename: './database/lunch.db', autoload: true });

function sendToAll(message) {
    db.find({ type: 'user' }, function(err, users) {
        if (err) console.log('error');
        users.forEach(function(user) {
            sendToUser(user.username, message);
        })
    });
}

function sendToUser(username, message) {
    var bodytext = '{"channel": "@' + username + '", "username": "lunch-bot","text": "' + message + '"}'
    request_lib.post({
            url: hooksURL + process.env.INCOMING_TOKEN,
            body: bodytext
        },
        function(error, response, body) {
            console.log(body);
        }
    );
}

exports.randomSelect = function(req, res, next) {
    var my_user = req.body.user_name;
    var retUrl = hooksURL + process.env.INCOMING_TOKEN;
    //console.log(retUrl);   

    db.find({ type: 'restaurant' }, function(err, rests) {
        if (err) console.log('error');

        var restArr = [];
        rests.forEach(function(rest) {
            restArr.push(rest);
        });

        var index = Math.floor(Math.random() * restArr.length);
        var allUsers = ['adi', 'evyatar', 'dudu', 'shavit'];
        var users = allUsers.remove(my_user);
        var msg = users.join(' and @')
        res.send("done");
        //sendToAll("today we eat at " + restArr[index].name + '!!?');
        sendToAll("Today you are going to eat at " + restArr[index].name + ", at 12:30 with @" + msg );
        next();
    });

}
