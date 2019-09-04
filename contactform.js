

function TAYOCV() {

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var title = document.getElementById("title").value;
var message = document.getElementById("message").value;

         if (name.length < 4)								 
	 { 
		window.alert("Name is too short"); 
		name.focus(); 
		return false; 
	 } 

	 if (email.value == "")                                   
         { 
               window.alert("Please enter a valid e-mail address."); 
               email.focus(); 
               return false; 
        } 
   
        if (email.value.indexOf("@", 0) < 0)                 
        { 
              window.alert("Please enter a valid e-mail address."); 
              email.focus(); 
              return false; 
        } 
   
        if (email.value.indexOf(".", 0) < 0)                 
        { 
                window.alert("Please enter a valid e-mail address."); 
                email.focus(); 
                return false; 
        } 
        
        if (message.lenght <=20)								 
	{ 
		window.alert("Type your message"); 
		message.focus(); 
		return false; 
	} 

	if (validation())
        {
               var x = document.getElementsByTagName("form");
               x[0].submit();
               alert(" Name : " + name + " n Email : " + email + " n Title : " + title + " n Message : " + message + " n Form Tag : <form>nn Form Submitted Successfully......");
        }
        return true; 
        }


