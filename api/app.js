var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var cors = require('cors');
 
var app = express();
var jsonParser = bodyParser.json();
 
app.use(express.static(__dirname + "/public"));
app.use(cors());

app.get("/api/formDefs/:sourceName", function(req, res){
	var sourceName = req.params.sourceName;
    var content = fs.readFileSync('configs/' + sourceName +".json", "utf8");
	res.send(JSON.parse(content));
});

app.get("/api/formValues/:sourceName", function(req, res){
	var sourceName = req.params.sourceName;
    var content = fs.readFileSync('configs/' + sourceName +".json", "utf8");
	res.send(JSON.parse(content));
});
  
app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});