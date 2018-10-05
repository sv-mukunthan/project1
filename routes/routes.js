console.log("routes");

var action=require("F:/project1/action/action.js");

var UIRoutes=function(app){
    this.app=app;
    this.actionInstance=new action(app);
};

module.exports=UIRoutes;

UIRoutes.prototype.init=function(){

  var self=this;
  var app=this.app;

  app.get('/',function(req,res){

      res.sendFile(path +'index.html');

  });
 console.log("client request");
 

 //login
 app.get('/login',function(req,res){

  console.log("login clicked");

 	var request=req.query;

 	console.log("login request",request);

 	self.actionInstance.login(request,function(error,response){

 		res.send(response);
 	})

 })

  //insert
  app.get('/insert',function(req,res){

    console.log("insert is clicked");

 	var request=req.query;

    console.log("insert request",request);
 	self.actionInstance.insert(request,function(error,response){

 		res.send(response);
 	})

 })


   //delete

   app.post('/delete',function(req,res){

    console.log("delete is clicked");

 	var request=req.body;

 	console.log("delete request",request);

 	self.actionInstance.delete(request,function(error,response){

 		res.send(response);
 	})

 })
};