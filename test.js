// ! DATA TYPES
    // ? PRIMITIVE DATA TYPES
        // TODO STRINGS
            var str = "hello world";
            var char = "a";
        
        // TODO NUMBERs
        var int = 300;
        var decimal = 30.1;

        // TODO BOOLEANS
        var TrueBoolean = true;
        var FalseBoolean = false;

        // TODO UNDEFINED
        var temp;
        var undefinedResult = temp;
        console.log(undefinedResult )

        // TODO NULL
        var nullValue = null;
        console.log(nullValue);

    // ? NON PRIMITIVE DATA
        // TODO OBJECTS
            // * * Using Constructor Function to define an object:
                // Create an empty generic object
                var obj = new Object();

                // Create a user defined object
                var mycar = new Car();

            // * * Using Literal notations to define an object:
                // An empty object
                var square = {};

                // Here a and b are keys and
                // 20 and 30 are values
                var circle = {
                    a: 20,
                    b: 30
                };
                console.log(circle.a)

        // TODO ARRAYS
            // * * Ways to declare a single dimensional array:
                // Call it with no arguments
                var a = new Array();

                // Call it with single numeric argument
                var b = new Array(10);

                // Explicitly specify two or
                // more array elements
                var d = new Array(1, 2, 3, "Hello");
                var a = new Array();
                var b = new Array(10);
                var d = new Array(1, 2, 3, "Hello");
                console.log("value of a=" + a);
                console.log("value of b" + b);
                console.log("value of d=" + d);

            var arr = [3, "type anything", 100]
            console.log(arr)


// ! DATA OUTPUT
    // CONSOLE LOG
console.log('hello world')

    // CONSOLE ERROR
console.error('this is an error text')

    // CONSOLE WARNING
console.warn('this is a warning text')

    // CONSOLE A TABLE
console.table([
    ["car", "price", "model"],
    ["Mustang", 40.893, "Explorer"],
    ["Chevrolet", 26.300, "Equinox"],
    ["Toyota", 46.685, "Tacoma"]
    ]); // teach it after showing them arrays

    // PROMPT
// console.log(prompt("what's your name?"))


// ! VARIABLE DECLARATIONS TO HOLD VALUES
    // * * Always declare JavaScript variables with var, let, or const.
    // * * The var keyword is used in all JavaScript code from 1995 to 2015.
    // * * The let and const keywords were added to JavaScript in 2015.
    // * * If you want your code to run in older browsers, you must use var.
    // * * Variables are containers for storing values.
// ? VAR KEYWORD
var x = 10 + 5
console.log(x)

var y = 30
var z = 100
var sum = y + z
console.log(sum)

    // * * If you think the value of the variable can change, use let
//  ? LET KEYWORD
let total = 400
total = 600
console.log(total)

    // * * CONST values CANNOT be changed once declared
// ? CONST KEYWORD
const pi = 3.14
// YOU WILL GET AN ERROR MSG
pi = 4

// ! CONCATENATION
let country = "Tunisia";
let language = "Arabic"
let population = 12
console.log(country + " is an African country.\nPeople of " + country + " speak " + language + " and the population is " + population + " millions.")


// ! TRUTHY VS FALSY
    // ? There are 6 falsy values in JS (falsy values evaluates to False)

    var False = false
    console.log(Boolean(False))

    var zero = 0
    console.log(Boolean(zero))

    var Undefined
    console.log(Boolean(Undefined))

    var emptyString = ""
    console.log(Boolean(emptyString))

    var Null = null
    console.log(Boolean(Null))

    var notNumber = NaN
    console.log(Boolean(notNumber))

    // ? The rest evaluates to truthy


// ! ARITHMETIC OPERATORS
    // todo Arithmetic operators are used to perform mathematic operations between numbers or strings. (show them the img)

// ! EQUALITY / RELATIONAL / COMPARISON OPERATORS
    // ? =	assigns a value to a variable
    // ? ==	compares the value of the variables
    // ? === compares the value and type of the variables
    // ? !=	compares the inequality based on value
    // ? !== compares the inequality based on value and type
    // todo show the the img


// ! LOGICAL OPERATORS 
const hasDriversLicense = true;
const hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision)//returns false
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision)
if(hasDriversLicense && hasGoodVision){
    console.log("Sarah is able to drive!")
}
else {
    console.log("Someone else should drive..")
}


// ! LOOPS
    // ? FOR loop
for(var i = 0; i <= 10; i++){
    console.log(i)
}

    // ? WHILE loop
var i = 0
text = ""
while(i <= 10 ){
    text = 'number of i is ' + i
    console.log(text)
    i++
}

    // ? DO WHILE loop
do {
    text += "The number is " + i + "\n";
    i++;
    }
while (i < 10);
console.log(text)


// ! CONDITIONALS
const pasword = Number(prompt("Plese enter your password"))
if (pasword === 5){
    console.log("correct")
}
else {
    prompt("error, try again")
}
