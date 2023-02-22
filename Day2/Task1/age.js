  function chechAge()
  {
    do{
    var age = Number(prompt("What's your age?"))
    while(age < 0 )
    {
       alert("Sorry! Your age is incorrect. Age must be positive number.")
       var age = Number(prompt("What's your age?"));
    }
    if( age >=1 && age<=10 )
    {
        alert("Your status is Child.")
    }
    else if(age >=11 && age<=18)
    {
        alert("Your status is Teenager.")
    }
    else if(age >=19 && age<=50)
    {
        alert("Your status is Grown up.")
    }
    else if(age > 50)
    {
        alert("Your status is Old.") 
    }
  } 
while(age !='' && age !=null)
{
    alert("Enter Age") 
}
}

chechAge()