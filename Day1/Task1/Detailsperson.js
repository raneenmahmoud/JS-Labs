var fname = prompt("What's your first name?");
var lname = prompt("What's your last name?");
let isManager = confirm('Is your Full Name?\n' + " " + fname + " " + lname)
var birthyear = Number(prompt("What's your birth year?"));
while(birthyear > 2023)
  {
     alert("Please Enter the correct year")
     var birthyear = Number(prompt("What's your birth year?"));
  }
  var age = 2023 - birthyear
  {
    alert("Welcom" + " " + fname + " " + lname + " " 
                    + "you are" + " " + age + " "+"years old");
  }
