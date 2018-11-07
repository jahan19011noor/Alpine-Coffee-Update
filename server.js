var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



// viewed at http://localhost:8080
app.use(express.static(__dirname+ '/views')); 


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});




app.post('/user', function(req, res){
   // res.sendFile(path.join(__dirname + '/views/index.html'));
    console.log("test")
    response = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        gender: req.body.gender
        };
    
    //this line is optional and will print the response on the command prompt
    //It's useful so that we know what infomration is being transferred 
    //using the server
    console.log(response);
    
    //convert the response in JSON format
    //res.end(JSON.stringify(response));
});


app.listen(4000);
console.log('Server started! At http://localhost:' + '8080');