var message = prompt("Enter desired string:")
countVoewls(message)

function countVoewls(str)
{    
    var count = 0;
    var s = str.toLowerCase()
    for(let i=0;i<s.length;i++)
    {
        switch(s[i])
        {
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'o':
                count++;
                break;
             case 'u':
                count++;
                break;
            case 'i':
                count++;
                break;
                
        }
       
    }
    document.write("Count of vowels is: " + " " + count)
}