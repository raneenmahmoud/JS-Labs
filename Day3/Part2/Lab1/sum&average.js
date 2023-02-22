var sum=0
var avg=0;
var count = Number(prompt("Enter count of values: "))
for(let i=0; i<count; i++)
{
    var num = Number(prompt("Enter " +(i+1) + "th: "))
    sum = sum + num
}
confirm("If you want know Sum and Average click on their buttons in home Page")
function Sum()
{
alert("Sum of entered values is: " + sum)
}
function Average()
{
    avg = sum/count
    alert("Average of entered values is: " + avg)
}
