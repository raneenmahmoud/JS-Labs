function login()
{
var userName = prompt("Enter UserName:")
var password = prompt("Enter Password:")
if(userName == "admin" && password == "421$$")
 {
    alert("Welcome login success")
 }
 else
 { 
   if(userName != "admin" && password != "421$$")
     {alert("UserName " + userName + " and Password " + password + " are wrong")}
   else if(userName != "admin")
     {alert("UserName " + userName+" "+ "is wrong")}
   else if(password != "421$$")
     {alert("Password " + password+" "+ "is wrong")}
 }
}