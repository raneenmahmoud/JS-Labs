//Part One
class  Shape{
    constructor(name, sides, sidelength)
    {
       this.name=name;
       this.sides = sides;
       this.sidelength = sidelength;
    }
    calcPerimeter(){
      var result = this.sides * this.sidelength
    //   return result
    console.log(`The Perimeter of ${this.name} of ${this.sides} sides with ${this.sidelength} = ${result}`)
    }
}
console.log("/******Part One******/")
let square1 = new Shape("square",4,5)
let triangle = new Shape("triangle",3,3)
square1.calcPerimeter();
triangle.calcPerimeter();


//Part Two
class Square extends Shape{
   constructor(sidelength,name="square",sides=4)
   {
    super(name,sides)
    this.sidelength=sidelength
   }
   calcArea(){
    let resultarea = this.sidelength * this.sidelength
    console.log(`The Area of ${this.name} of ${this.sides} with ${this.sidelength} = ${resultarea}`)
   }
}
console.log("/********Part Two********/")
let square2 = new Square(4)
square2.calcPerimeter()
square2.calcArea()

//Part Three
class Triple{
  static customName ="Tripler"
  static description = "I triple any number you provide"
  static calculate(n){
    this.N = n || 1
    let resultparent = (this.N) * 3
    return resultparent
  }
}
class SquaredTriple extends Triple{
    static longDescription
    static description = "I square the triple of any number you provide"
    static calculate(n){
       return Triple.calculate(n) * Triple.calculate(n)
    }
}
console.log("/********Part Three********/")
console.log("/******* Parent Class*******/")
console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18
 
console.log("/******* subclass Class********/")
console.log(SquaredTriple.calculate(3))
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); 

