function person (full_name, money, sleep_mood, health_Rate) {
      return {
        full_name,
        money,
        sleep_mood,
        health_Rate,
        //Declare Methods in prototype
        sleep(hours) {
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
         },
          Eat(meals) {
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
          },
          Buy(items) {	
             if(items==1)
             {
                 this.money=this.money - 10;
                 console.log(this.money);
             }
             else{
                 console.log(this.money);
             }
          }
      }
    }

const person1 = person('Raneen', '50', 'Happy', '75')
console.log(person1)
console.log(person1.sleep(8))
console.log(person1.Eat(2)) 
console.log(person1.Buy(9))
