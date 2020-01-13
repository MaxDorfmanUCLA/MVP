var express = require('express');
const bodyParser = require('body-parser');
var hashFunc = require('./hash.js');
var path = require('path');
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'maxdorfman',
  host: 'localhost',
  database: 'hackprac', 
  password: 'mnm',
  port: 5432,
})

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
app.get('/:username/:password', function(req,res){
    var resultObj = hashFunc(req.params.password);
    res.send(resultObj);
    //add to DB
})

//login
app.get('/:password', function(req,res){
    var resultObj = hashFunc(req.params.password);
    res.send(resultObj);
    //add to DB
})

app.get('/', function(req,res){
    var resultObj = hashFunc(req.params.password);
    res.send(resultObj);
    //add to DB
})

app.get('/', function(req,res){
    pool.query(`SELECT * FROM users`, (error, result) => { 
        if (error) {
          res.status(400)
          throw error
        }
            console.log()
          res.status(200).json(result.rows)
    })
    
})
