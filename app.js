var express = require("express");
var app = express();

var bodyParser=require('body-parser');
// var urlencodedparser=app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit:'50'}))
app.use(bodyParser.urlencoded({ extended: false }));

var port=8000; 
var server=app.listen(port,function(){
          console.log('Listening on port %d',port);
});

  var path = __dirname + '/views/';
  app.get('/',function(req,res){

    
      res.sendFile(path +'index.html');

  })

var webroutes=require("F:/project1/routes/routes.js");
var webroutes=new webroutes(app);
webroutes.init();
