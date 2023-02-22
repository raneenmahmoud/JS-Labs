let employees=[];
class Person{
    #health_Rate = 0;
    constructor(full_name, money, sleep_mood)
    {
    this.name = full_name;
    this.money = money;
    this.sleep_mood = sleep_mood;
    }
    //Declare Methods in prototype
    get health_Rate () {
        return this.#health_Rate
      }
    
      set health_Rate (value) {
        if (value > 100) 
        {   console.log('Sorry health_Rate must be 100 at most')
            this.#health_Rate = this.#health_Rate}
        else {this.#health_Rate = value}
      }
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
     }
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
      }
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

class Employee extends Person{
    #salary = 1000;
    constructor(full_name, money, sleep_mood, 
                  id, email, workMood, isManager)
    { 
        super(full_name, money, sleep_mood)
        this.id = id
        this.mail = email
        this.workMood = workMood
        this.isManager = isManager
        this.#salary = 1000
   }
   //Declare Methods in prototype
   work(hours)
   {
    if(hours==8)
        {
         this.sleep_mood = "Happy";
         console.log(this.sleep_mood);
        }
        else if(hours>8)
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
   get salary () {
        return this.#salary
      }
    
      set salary (value) {
        if (value < 1000) 
        {   console.log('Sorry Salary must be 1000 at least')
            this.#salary = this.#salary}
        else {this.#salary = value}
      }
}

class Office extends Employee{
    constructor(full_name, money, sleep_mood,  
        id, email, workMood, isManager, name)
        {
            super(full_name, money, sleep_mood,
                id, email, workMood, isManager)
                this.n = name
        }
    hire(employee)
        {   
            for(let i=0;i<employees.length;i++){
                if(employees[i].id===employee.id )
                {alert('Sorry, this id already taken')
                 menu()}}
            employees.push(employee)
            // console.log(employee)      
       }
    getAllEmployees()
        {
        let countemp =0, countmang =0
        for(let i=0;i<employees.length;i++){
            if(employees[i].isManager==='manager' )
                {countmang++
                alert("Mngager NO: "+countmang +'\n'+JSON.stringify(employees[i]))}
            else if(employees[i].isManager==='employee')
                {countemp++
                alert("Employee NO: "+countemp+'\n'+JSON.stringify(employees[i]))}
         }
        }
    getEmployee(empid)
        {
            for(let i=0;i<employees.length;i++)
            if(employees[i].id==empid ){
            alert(JSON.stringify(employees[i])+ "Salary is: " + employees[i].salary);}
            // console.log(employees[i])
        }
    fire(empid)
        {
            // const arr = employees.filter(function (element) {return element !== empid})
            for(let i=0;i<employees.length;i++)
            {
               if(employees[i].id==empid )
                {
                    let index = employees.indexOf(employees[i])
                    employees.splice(index,1)
                    console.log(index)
                    console.log(employees[i])//give element after that why????
                }
            }
            console.log(JSON.stringify(employees));
        } 
  }     
let office1 = new Office ();
function menu(){
    do{
        var operation = Number(prompt('Enter number that matches desired operation:\n 1) Add new employee:\n 2) Get employee by its id:\n 3) GetAll employees:\n 4) Delete specific emplyee by it id:\n 5) Quit from menu:'))
        if(operation == 5)
           {break}
        switch(operation)
        {
            case 1: //add
              var ismanager = prompt('manager or employee: ')
              var name = prompt('Enter Full Name: ')
              var id = prompt('Enter ID: ')
              var mail = prompt('Enter Email: ')
              var salary = prompt('Enter Salary: ')
              const emp = new Employee(name, 100, "Happy", id, mail, "tired",ismanager)
              emp.salary= salary; //setter
              office1.hire(emp)
              break;
            case 2: 
               var emp_id = Number(prompt('Enter desired ID: '))
               office1.getEmployee(emp_id)
               break
            case 3: 
                office1.getAllEmployees()
                break
            case 4: 
                var emp_id = Number(prompt('Enter desired ID: '))
                office1.fire(emp_id)
                break
            default:
                alert('This is not allowed operation, Please chooses the number that matches desired operation from the previous method')
                break
        }
    }
    while(operation !='' && operation !=null)
    {
        alert('You are exited')
                
    }
}
 menu()