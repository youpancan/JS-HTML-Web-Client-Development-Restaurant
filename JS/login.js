
       var login_username="YOU@proj.ca";
       var login_password="123";

       function load(){
           $(document).ready(function()
           {
               $(".login").show(); //show class login when you load the page
               $(".logout").hide(); //hide class logout when you load the page
           })
       }

       function authenticate_login()
       {
         var v1,v2;
         v1=document.getElementById("user").value;
         //v1=document.form1.firstname.value;
         v2=document.getElementById("pwd").value;

         $(document).ready(function()
         {
           if((v1==login_username) && (v2==login_password))
             {
               alert('Welcome to our website');
               parent.frames.Menu_Frame.location.href="Menu.htm";
               document.getElementById("uname").innerHTML="Welcome"+login_username+"<br>";
               $(".login").hide();  //hide class login
               $(".logout").show(); //show class logout
               
              }

           else
              {
               $(".login").show(); //show class login
               $(".logout").hide();//hide class logout
               alert('Invalid User or Password Login');
               document.getElementById("pwd").value="";
               document.getElementById("pwd").focus();
               parent.frames.Menu_Frame.location.href="MenuNull.htm";
              }
         });
        }

   

       function authenticate_logout()
       {
         alert('thank you!');
         document.getElementById("user").value="";
         document.getElementById("pwd").value="";
         document.getElementById("user").focus();
         parent.frames.Menu_Frame.location.href="MenuNull.htm";
         parent.frames.Content_frameElement.location.href="Content.htm"; ///change this htm to null
         $(document).ready(function()
         {
           $(".login").show();//show class login
           $(".logout").hide(); //hide class logout
         }  
         );

         }
      
 