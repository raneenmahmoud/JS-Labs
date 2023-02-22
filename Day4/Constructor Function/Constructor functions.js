function person(full_name, money, sleep_mood, health_Rate)
{
    this.name = full_name;
    this.money = money;
    this.sleep_mood = sleep_mood;
    this.health_Rate=health_Rate;
}
//Declare Methods in prototype
person.prototype.sleep = function(hours) {
   if(hours==7)
   {
    this.sleep_mood = "Happy";
    console.log(this.sleep_mood);
   }
   else if(hours<7)
   {
    this.sleep_mood = "Tired";
    console.log(this.sleep_mood);
   }
   else 
   {
    this.sleep_mood = "Lazy";
    console.log(this.sleep_mood);
   }
}

person.prototype.Eat = function(meals) {
    switch(meals)
    {
        case 1: 
            this.health_Rate = 50;
            console.log(this.health_Rate);
            break;
        case 2 :
            this.health_Rate = 75;
            console.log(this.health_Rate);
            break;
        case 3:
            this.health_Rate = 100; 
            console.log(this.health_Rate);
            break;
    }
 }
 person.prototype.Buy = function(items) {	
    if(items==1)
    {
        this.money=this.money - 10;
        console.log(this.money);
    }
 }

 let person1 = new person ("Raneen", 50, 'Tired', 75);
 console.log(person1);
 console.log(person1.Buy(1));
 console.log(person1.Eat(2));
 console.log(person1.sleep(6));

