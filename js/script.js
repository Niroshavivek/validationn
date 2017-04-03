$(document).ready(function(){

$("#register").click(function(){

	var name = $("#name").val();
	var email = $("#email").val();
	var password = $("#pass").val();
	var cpassword = $("#passw").val();
	var pnum=$("mno").val();
	var isChecked = jQuery("input[name=chest]:checked").val();
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var phoneno = /^\d{10}$/;
        
	if( name =='' || email =='' || password =='' || cpassword =='')
		{
		  alert("Please fill all fields...!!!!!!");
		}
        else if(!(email).match(emailReg))
		{
			alert("Invalid Email...!!!!!!");
		}
		        
	else if((password.length)<8)
		{
			alert("Password should atleast 8 character in length...!!!!!!");
		}
		
	else if(!(password).match(cpassword))
		{
			alert("Your passwords don't match. Try again?");
		} 
		else if(!isChecked){
         alert('Nothing Selected');
     }
	
	else 
	   {
	     alert("You have Successfully Registered.....");
             $("form")[0].reset();
             location.href = "in.html";
             $.get("in.html", function (name) {
             	alert();
                    $(this).children("div:p").html(name);
                    alert();
                });
	   }
	
	});

});