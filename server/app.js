var express = require('express');
const bodyParser = require('body-parser');
var hashFunc = require('./hash.js/index.js');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, './client/src/index.html')));
console.log(__dirname);
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended: true}));
console.log(hashFunc('thisIsMypassWorD'));

app.listen(8080, function(){
    console.log('Listening on port 8080...');
})

//login
app.get('/:password', function(req,res){
    var resultObj = hashFunc(req.params.password);
    res.send(resultObj);
    //add to DB
})

app.get('/mylist', function(req,res){
    var resultObj = hashFunc(req.params.password);
    res.send(resultObj);
    //add to DB
})

