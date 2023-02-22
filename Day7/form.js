          var body = document.getElementById("body");
          body.style.backgroundImage = "url('./assests/form.jpg') ";
          body.style.backgroundRepeat = "no-repeat ";
          body.style.backgroundSize = "100% 100%";
          body.style.backgroundAttachment = "fixed";
          function changeBackground(id, color) {
            document.getElementById(id).style.background = color;
           }
          function Check(){
             var username = document.getElementById("name");
             var password = document.getElementById("pass")
             if(username.value === "Admin" && password.value == 123)
               {
                    alert("Rehestered Successfully")
                    username.style.border= "0px solid ";
                    username.style.borderBottom= "1px solid ";
                    username.style.boxShadow = "0 0 0px";
                    username.style.borderBottom= "1px solid ";
                    password.style.boxShadow = "0 0 0px";
                    username.value = ""
                    password.value = ""
               }
             else 
             {
                username.focus()
                username.style.border= "1px solid ";
                username.style.boxShadow = "0 0 10px #78e4ff";
                password.focus()
                password.style.border= "1px solid ";
                password.style.boxShadow = "0 0 10px #78e4ff";
                alert("Not Registered")
             }
             return false;
          }
          function putborder(elm){
            console.log(elm);
              elm.style.border = "1px solid";
          }
          function removeborder(elm){
            console.log(elm);
              elm.style.border = "none ";
              elm.style.borderBottom = "1px solid";
          }
          