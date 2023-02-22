var time = Number(prompt("Enter time: "))
calculateTime(time)

function calculateTime(timehours)
{ 

     while(timehours < 0 )
     {
        alert("Sorry! This time is incorrect. Time must be positive value.")
        var timehours = Number(prompt("Enter Time: "));
     }
    if(timehours==0)
    {
        alert("Time in Hours is 12 AM")
    }
    else if(timehours > 0 && timehours < 12)
    {
        alert("Time in Hours is " + " " + timehours + " " + "AM")
    }
    else if(timehours == 12)
    {
        alert("Time in Hours is 12 PM")
    }
    else if(timehours > 12 && timehours<24)
    {
        var th = timehours - 12
        alert("Time in Hours is " + " " + th + " " + "PM")
    }
    else if(timehours > 24)
    { 
        alert("Sorry! This time is incorrect. Time must be less than 24.")
    }
}