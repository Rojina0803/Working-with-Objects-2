//Working with Objects

const mySym = Symbol("key1")


const JsUser = {
    name: "Rebika",
    "full name": "Rebika  Choudhary",
    [mySym]: "mykey1",
    email: "rebika@google.com",

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "youh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "point@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };

  

console.log(myCar.make);
console.log(myCar["model"]);

const myObj = {};
const str = "myString";
const rand = Math.random();
const anotherObj = {};

propertyName = "model";
myCar[propertyName] = "Mustang";

console.log(myCar);


myObj.type = "Dot syntax for a key named type";
myObj["date created"] = "This key has a space";
myObj[str] = "This key is in variable str";
myObj[rand] = "A random number is the key here";
myObj[anotherObj] = "This key is object anotherObj";
myObj[""] = "This key is an empty string";

console.log(myObj);

str = "myString";
myObj[str] = "This key is in variable str";

console.log(myObj.str); 

console.log(myObj[str]); 
console.log(myObj.myString);

let propertyName = "make";
myCar[propertyName] = "Ford";


