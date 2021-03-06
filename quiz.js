// Section 1

// What types are these?

/* 1.1 */ 1;
number

/* 1.2 */ "cat";
string

/* 1.3 */ true;
boolean

/* 1.4 */ [];
array

/* 1.5 */ {};
object

/* 1.6 */ 1.1;
number

/* 1.7 */ var myVariable;
variable


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1;
true

/* 2.2 */ "cat";
true

/* 2.3 */ true;
true

/* 2.4 */ NaN;
false

/* 2.5 */ [];
true

/* 2.6 */ {};
true

/* 2.7 */ undefined;
false

/* 2.8 */ "";
false

/* 2.9 */ 0;
false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var number = 1;

// 3.2 Assign a variable that is a string
var string = "Alton White is a very good hockey player";

// 3.3 Assign a variable that is a boolean
var altonWhiteIsAGoodHockeyPlayer = true;

// 3.4 Assign a variable that is an object
var object = {name: "Alton White", occupation: "all star hockey legend"}; 


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

var number = 0;

if (number > 0) {
  console.log("hello");
} else {
  console.log("bye");
}

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var first = animals[0];
// 5.2. Assign the last element to a variable
var last = animals[-1];
// 5.3. Assign the length of an array to a variable
var length = animals.length;
// 5.4. Add an item to the end of the array
animals.push("pika");
// 5.5. Add an item to the start of the array
animals.unshift("guinea pig");
// 5.6. Assign the index of hedgehog to a variable
var index = animals.indexOf("hedgehog");


// Section 6

// 6.1 Create an array of 5 vegetables
var veg = ["carrot", "onion", "cabbage", "potato", "mangetout"] 
// 6.2 Loop over the array and write to the console using a "while"
var count = 0;

while (count < veg.length) {
  console.log(veg[count]);
  count++;
}

// 6.3 Loop again using a "for" with a counter
for (var i = 0; i < veg.length; i++) {
  console.log(veg[i]);
}

// 6.4 Loop again using a "for of"
for vegetable of veg {
  console.log(vegetable);
}

// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
      },
      { name: 'val',
        amount: 55125.10,
        type: 'business'
      },
      { name: 'marc',
        amount: 400.00,
        type: 'personal'
      },
      { name: 'keith',
        amount: 220.25,
        type: 'business'
      },
      { name: 'rick',
        amount: 1.00,
        type: 'personal'
      },
    ];

    // 7.1 Calculate the total cash in accounts
var amount = 0;
for (key in object) {
  amount += object[key][amount];
}

    // 7.2 Find the amount of money in the account with the largest balance
    // 7.3 Find the name of the account with the smallest balance
    // 7.4 Calculate the average bank account value
    // 7.5 Find the value of marcs bank account
    // 7.6 Find the holder of the largest bank account
    // 7.7 Calculate the total cash in business accounts
    // 7.8 Find the largest personal account owner


    // Section 8

    // Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method