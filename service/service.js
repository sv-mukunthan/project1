console.log("service");

var service=function(app) {
this.app=app;
};


module.exports=service;

//login
service.prototype.login=function(reqobj,callback){

	var userrequest=reqobj;
	console.log("req object from client login method",userrequest);
	console.log("login userrequest.username:",userrequest.username);
	console.log("login userrequest.password:",userrequest.password);
	var userpsw=parseInt(userrequest.password,10);
	console.log("integer value for password",userpsw);
    var MongoClient=require('mongodb').MongoClient;
    var url="mongodb://localhost/27017";
     MongoClient.connect(url,{ useNewUrlParser : true }, function(err, db) {
       if (err) throw err;
       var dbo = db.db("student");
        dbo.collection('Emailid').findOne({username:userrequest.username,password:userpsw}).toArray(function(err,result) {
          if (err) throw err;
          console.log(result);
          db.close();
          callback(err,result)
        
         });

      });
};


//insert
service.prototype.insert=function(reqobj,callback){
     
	var userrequest=reqobj;
	console.log("req object from client insert method",userrequest);
  console.log("insert userrequest.username:",userrequest.username);
  console.log("insert userrequest.password:",userrequest.password);
    var MongoClient=require('mongodb').MongoClient;
    var url='mongodb://localhost/27017';
     MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       var dbo = db.db("student");
        dbo.collection('Emailid').insertOne(userrequest,function(err,result) {
          if (err) throw err;
          console.log(result);
          db.close();
          callback(err,result)
        
        });

    });
};


//delete
service.prototype.delete=function(reqobj,callback){
    var userrequest=reqobj;
	console.log("req object from client delete method",userrequest); 
  console.log("delete userrequest.username:",userrequest.username);
  console.log("delete userrequest.password:",userrequest.password); 
    var MongoClient=require('mongodb').MongoClient;
    var url='mongodb://localhost/27017';
     MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       var dbo = db.db("student");
        dbo.collection('Emailid').deleteOne(userrequest,function(err,result) {
          if (err) throw err;
          console.log(result);
          db.close();
          callback(err,result)
        
        });

    });
};