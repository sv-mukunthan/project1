$( document ).ready(function() {
console.log("getrequest");
	$("#login").click(function(){
        var username=document.getElementById(#user);
        console.log(username);

        var password=document.getElementById(#psw);
        console.log(password);
	});

    $("#cancel").click(function(){
    	$("#user").val("");
    	$("#psw").val("");
    })


            $.ajax({
                     url: "/login",
                     type:'GET',
                     contentType: "application/json; charset=utf-8",
                     dataType: "json",
                     data:inputObject,
                     success: function(data, status, jqXR){
                       console.log(data);
                       console.log(status);
                     },
            })
                    .done(function() {
                      console.log("success");
                    })    

    }
