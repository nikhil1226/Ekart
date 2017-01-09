var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('login', ['login']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/newUser', function(req, res) {        //Get the data from data base
    console.log("i received a get request"); 
    
    db.login.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
});


app.post('/newUser', function(req, res) {       //Post the data to data base (registration)

    console.log(req.body);
    db.login.insert(req.body, function(err, doc) {
        res.json(doc);                          //sending data again to controller
    })
});

app.post('/postData', function(req, res) {      //login verification
    var user = req.body
    console.log(req.body);
    db.login.findOne({
        email: user.email,
        password: user.password
    }, function(err, docs) {

        if (err) {
            console.log("error");
            return next(err);
        }

        console.log(docs);
        res.json(docs);
    });
});
                        //registration cart

app.get('/electronicsData', function(req, res) {
    db.electronics.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

                        //registration cart
app.get('/accesoriesData', function(req, res) {
    db.accesories.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.listen(7000);
console.log("server running royyy on port 7000"); //this is for server cmd