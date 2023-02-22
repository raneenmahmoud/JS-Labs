function calcArea()
{
    var shape = prompt("Enter name of shape");
    var shapestr = shape.toLowerCase()
        switch(shapestr){
            case"circle":
                radius = Number(prompt("Enter the radius of the circle"));
                alert("Area of circle is " + 3.14 * Math.pow(radius,2)); 
                break;
        case"square":
                length = Number(prompt("Enter the length of side"));
                alert("Area of square is " + length * length); 
                break;
        case"triangle":
                base  = Number(prompt("Enter the base of triangle"));
                height = Number(prompt("Enter the height of triangle"));
                alert("Area of triangle is " + .5 * base * height)
                break;
        case"rectangle":
                width  = Number(prompt("Enter the width of rectangle"));
                height = Number(prompt("Enter the height of rectangle"));
                alert("Area of Rectangle is " + width * heightr)
                break;
        case"ellipse":
                minor  = Number(prompt("Enter the minor of ellipse"));
                major = Number(prompt("Enter the major of ellipse"));
                alert("Area of Ellipse is " + 3.14 * minor * major)
                break;
        case"trapezium":
                length1  = Number(prompt("Enter the lenght1 of trapezium"));
                length2 = Number(prompt("Enter the lenght2 of trapezium"));
                height = Number(prompt("Enter the height of trapezium"));
                alert("Area of Ellipse is " + 0.5 * (lenght1 + lenght2)*height)
                break;      
        default:
                alert("Not valid shape")
            break;
    }
                    
}