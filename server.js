var express = require("express");
var bodyParser = require("body-parser");
var app = express();
// ****************************************************************

// Sets an initial port. 
var PORT = process.env.PORT || 3306;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendfile("index.html");
});
app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});
app.listen(3306,function(){
  console.log("Listening on PORT 3306");
})

