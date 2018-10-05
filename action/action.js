console.log("action");

var service=require("F:/project1/service/service.js");

var action=function(app) {
   this.app=app;
   this.apiserviceInstance=new service(app);
};

module.exports=action;


  //login 
  action.prototype.login=function(request,callback){

     var reqobj=request;
    
     console.log('login request object',reqobj);
     var self=this;

       self.apiserviceInstance.login(reqobj,function(error,response){

       	var reqobject=reqobj;
       	console.log(reqobj);
        console.log("login response",response[0]);
        var res=response[0];
        console.log("login response.username",res.username);
        console.log("login response.password",res.password);

        if(reqobject.username==res.username && reqobject.password==res.password)
        {
        	console.log("login successfully");
        }
        else if(reqobject.username==null && reqobject.password==null){
        	console.log("login failed");
        }
	    callback(error,response);

       });
    };
  

   //insert
   action.prototype.insert=function(request,callback){

     var reqobj=request;
    
     console.log('insert request object',reqobj);
     

       var self=this;
   
      self.apiserviceInstance.insert(reqobj,function(error,response){
      
           console.log("the inserted data$$$$:",response);
           var res=response;
           console.log("response for username@@@",res.username);
          console.log("response for password@@@",res.password);


	    callback(error,response);

      });
    };

   //delete
   action.prototype.delete=function(request,callback){

     var reqobj=request;
    
     console.log('delete request object',reqobj);    
  
     var self=this;

      self.apiserviceInstance.delete(reqobj,function(error,response){


	    callback(error,response);

      });
    };