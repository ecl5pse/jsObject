'use strict';

/*
const  user = {


    firstName: "Masha",
    lastName: "Ivanova",
    age: 4,
};

*/

/*

console.log(user);

user.age = 5;



while(user.age < 20){
    console.log(user.age);


    user.age++;
}

user.firstName = "Misha";
user.lastName="Ivanov";
user.isMale =true;

console.log(user);

*/

/*
console.log(user);
user.isMale = false;
console.log(user);


delete user.isMale;
console.log(user);

*/


// const car = {
//
//     model:"tur tur",
//     bodyType:"hatchback",
//
//     typeEngine: 'diesel',
//     color:"black",
//
//
// };
//
// console.log(car);
// car.color='red';
// console.log(car);
// delete  car.color;
// console.log(car);




/*const userTomCruise = {


    firstName:"Tom",
    lastName:"Cruise",
    isMale: true,




    sayHi: function () {
        console.log("Hi , my name is " + this.firstName +''+ this.lastName + "!");
    },

    logItself: function () {
        console.log(this);

    },

    directionGreeting: function (user) {
        console.log("Hi " +user.firstName);

    },


};*/

/*

function sayHi(user){

    console.log("Hi, my name is " + user.firstName + " "+user.lastName+ "!");
}


sayHi(userTomCruise);*/
/*

userTomCruise.logItself();
console.log(userTomCruise);




*/


/*


function Engine(volume , power , type ) {

    this.volume = volume;
    this.power = power;
    this.type = type;

}


function Car( brand , isCabriolet, color, avgSpeed , engine) {

    this.brand = brand;
    this.isCabriolet = isCabriolet;
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.engine = engine;
}

const mercedesEngine = new Engine(3,400,"Benz");


const  mercedes = new Car("Mercedes-Benz",true, "red", 50, mercedesEngine);
console.log(mercedes);





const mercedesEngine = new Engine(4,1000, "Disel");

*/

/*function Heart() {
    
}


const cat =  {


    head: new Heart(),
    
};

const whale = {

    head: new Heart(),
    
};





*/

/*

let x = 10;
let y = x;

console.group("Типы значения");

console.log("X = " , x);
console.log("Y= ", y );

y= 50;

console.log("X = ", x );
console.log("Y = " , y );
console.groupEnd();


console.group("Ссылочные типы");

let obj1 = {
    name: "Ivan",
};


let obj2 = obj1;

console.log("obj1 = " , obj1);
console.log("obj2= ", obj2 );

obj2.name="Sasha";

console.log("obj1 = ", obj1 );
console.log("obj2 = " , obj2 );

console.log(obj1===obj2);
console.groupEnd();

*/


/*

if (true){
    let test = 10;
    console.log (test);
}

console.log(test);


*/


/*

function f() {


    JJJJ= 10;

}

f();
console.log(this);




*/



function f() {

    let count =0;

    return function ()
    {
        return count;

    }

}
const  counter = f();

console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );
console.log( counter() );

