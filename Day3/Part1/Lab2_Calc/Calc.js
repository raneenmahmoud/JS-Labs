function calculator()
{
var firstNum = Number(prompt("Enter the fisrt Number: "));
var oper = prompt("Enter desired Operation: ");
var secNum = Number(prompt("Enter the second Number: "));
operation(oper,secNum,firstNum)

do{
    var answer = confirm("Do you want to do another operation? ")
    if(answer)
     {
        var oper = prompt("Enter desired Operation: ");
        var secNum = Number(prompt("Enter the second Number: "));
        operation(oper,secNum)
     }
      
 }while(answer !='' && answer !=null)
}
var result ;
function operation(operator,second,first)
{   
    
    var first = first || result
    // if (first === undefined) {
    //     first = result;
    //   }  
switch(operator)
{
    case '+':
        result = first + second
        alert("Result of " + first + " + " + second + " = " + result);
        break;
    case '-':
        result = first - second
        alert("Result of " + first + " - " + second + " = " + result);
        break;
    case '*':
        result = first * second
        alert("Result of " + first + " * " + second + " = " + result);
        break;
    case '/':
        result = first / second
        alert("Result of " + first + " / " + second + " = " + result);
        break;
    case '%':
        result = first % second
        alert("Result of " + first + " % " + second + " = " + result);
        break;
    default:
        alert("This is Invalid operation")    
}
}


