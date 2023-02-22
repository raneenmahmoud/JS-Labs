/*// Method 1:  Object.isExtensible()
// This method takes one parameter (object_name)
// Usage: This method used to check whether the object is extensible or not
//Return boolean value (true if object extensible, false if object not extensible) 
//Example
const object1 = {};
console.log(Object.isExtensible(object1)); //true
//------------------------------------------------------------------------------------------------
// Method 2:  Object.defineProperty()
// This method takes three parameters (object_name, key, discriptor)
// Usage: This method used to added new key or modified value of 
//existed key in the object with restriction (wwritable: false)
//Return the updated object 
//Example
const object2 = {'Name':'Raneen'};
//modify value of key Name in object object2 with restriction 
Object.defineProperty(object2, 'Name', {
  value: 'raneen', 
  writable: false
});
object2.Name = 'R';// Throws an error in strict mode 
//(can't update the value because of existance of writable: false)
//Adding new key with its value to object object2
Object.defineProperty(object2, 'Age', {
    value: '22', 
    writable: true 
  });
  object2.Age = 23; // Doesn't throw an error in strict mode
//update the value because of existance of writable: true)
console.log(object2);//{"Name": "raneen", 'Age': '23'}
//-----------------------------------------------------------------------------------------
// Method 3:  Object.preventExtensions()
// This method takes one parameter (object_name)
// Usage: This method used to prevent from adding or modifying the object 
//Return object 
//Example
const object3 = {};
Object.preventExtensions(object3);
console.log(Object.isExtensible(object3)); //false
try {
  Object.defineProperty(object3, 'Name', {
    value: 'Raneen'
  });
} catch (e) {
  console.log(e);//output: TypeError: Cannot define property Name, object is not extensible
}
//------------------------------------------------------------------------------------------------
// Method 4:  Object.defineProperties()
// This method takes (object_name, props (more one key))
// Usage: This method used to  add or modify more one prop in the object 
//Return updated object 
//Example
const object4 = {};
Object.defineProperties(object4, {
  Name: {
    value: 'Raneen',
    writable: false
  },
  Age: {},
  Gender:{
    value: 'Female',
  }
});
console.log(object4);//{Name: 'Raneen', Age: undefined, Gender: 'Female'}
//------------------------------------------------------------------------------------------------
// Method 5:  Object.assign()
// This method takes (object_name1, object_name1)
// Usage: This method used to add all rest objects to the first object and override the value of repeated in more one object with last value
//Return new object of all merging objects which equals to first object
//Example
const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { b: 6, d: 8 };
const returnedTarget = Object.assign(target, source1,source2);

console.log(target);// target { a: 1, b: 6, c: 5, d: 8 }
console.log(source1);//source1 {b: 4, c: 5}
console.log(source2);//source2 {b: 6, c: 8}
console.log(returnedTarget === target);//true
//------------------------------------------------------------------------------------------------
// Method 6:  propertyIsEnumerable()
// This method takes (prop)
// Usage: This method determines if the specified property,is an enumerable own property of the object
//Return boolean value true or false
//Example
const obj1 = { gender:"F" };
const obj2 = { };
//enumerable own property of the object
obj1.name = "Raneen";
obj2.name="Mohamed";
//non enumerable own property of the object
Object.defineProperty(obj1, 'age', {
    value: '23', 
    writable: false
  });
Object.defineProperty(obj2, 'age', {
    value: '22', 
    writable: false
  });
console.log(obj1.propertyIsEnumerable('name'));//true
console.log(obj2.propertyIsEnumerable('gender'));//false
console.log(obj2.propertyIsEnumerable('age'));//false
//------------------------------------------------------------------------------------------------
// Method 7:  hasOwn()
// This method takes (prop)
// Usage: This method determines if the specified property is an own property of the object
//Return boolean value true or false
//Example
const obj1 = { gender:"F" };
const obj2 = { };
obj1.name = "Raneen";
obj2.name="Mohamed";
Object.defineProperty(obj1, 'age', {
    value: '23', 
    writable: false
  });
Object.defineProperty(obj2, 'age', {
    value: '22', 
    writable: false
  });
console.log(obj1.hasOwn('name'));//true
console.log(obj1.hasOwn('age'));//true
console.log(obj1.hasOwn('gender'));//true
console.log(obj2.hasOwn'gender'));//false
//------------------------------------------------------------------------------------------------
// Method 8: Object.getOwnPropertyDescriptor()
//           Object.getOwnPropertyDescriptors()
// first method takes (object_name, prop)
//second methid takes (object_name) returns each propety alone
// Usage: It is alternative to propertyIsEnumerable()
//        This method returns an object describing a specific property of a given object
//Return discriptor of property of object (writable, value, configurable, get, set, enumerable )
//writable->true if can be modified else false      
//configurable->true if can be changed or deleted else false
//enumerable -> true then property treated as enumerable property else false
//value-> value of property key
//Example
const obj1 = { gender:"F" };
obj1.name = "Raneen";
Object.defineProperty(obj1, 'age', {
    value: '23', 
    writable: false
  });
const descriptor1 = Object.getOwnPropertyDescriptor(obj1, 'name');
console.log(descriptor1.writable);//true
console.log(descriptor1.configurable);//true
console.log(descriptor1.value);//Raneen
console.log(descriptor1.enumerable);//true

const descriptors = Object.getOwnPropertyDescriptors(obj1);
console.log(descriptors);
//------------------------------------------------------------------------------------------------
// Method 9: Object.fromEntries()
// first method takes Object.fromEntries(iterable) such as array or map
// Usage: transforms a list of key-value pairs into an object. this object
//Return A new object whose properties are given by the entries of the iterable.
//Example
const arr = [
    ["0", "a"],
    ["1", "b"],
    ["2", "c"],
  ];
  const obj = Object.fromEntries(arr);
  Object.defineProperty(obj, 'age', {
    value: '23', 
    writable: false
  });
  console.log(obj); // { 0: "a", 1: "b", 2: "c", age:"23" }
  console.log(Object.values(obj));//['a', 'b', 'c'] //return own enumerable
  
//------------------------------------------------------------------------------------------------
// Method 10: Object.frozen()
// first method takes (object_name)
// Usage: determines if an object is frozen
//Return boolean value
//Example
const object3 = {};
Object.preventExtensions(object3);
console.log(Object.isExtensible(object3)); //false
console.log(Object.isFrozen(object3)) //true
//------------------------------------------------------------------------------------------------
// Method 11: JSON.stringify()
//  method takes (object_name)
// Usage: converts object to string
//Return object as string 
//Example
const object11 = {name:"Ranee",
                   age:"23"};
alert(JSON.stringify(object11));
//------------------------------------------------------------------------------------------------
// Method 12: JSON.parse()
//  method takes (string_name)
// Usage: converts string to object
//Return boolean value
//Example
const str ="Raneen Mahmoud "
console.log((JSON.stringify(str)));
//------------------------------------------------------------------------------------------------
*/


//Inheritance on constructor function
// //Define constructor function
// function Person(full_name, age, gender) {
//   this.name = full_name;
//   this.age = age;
//   this.gender = gender;
// }
// //Define new constructor function that inherit from previous function
// function Developer(full_name, age, gender, specialization) {
//   Person.call(this, full_name, age, gender);//Calling Person constructor function
//   this.specialization = specialization;//Adding new parameter 
// }
// let person = new Person("Raneen", 22, "Female")
// let developer = new Developer("Raneen", 22, "Female", "Backend Developer")
// console.log(person);
// console.log(developer);