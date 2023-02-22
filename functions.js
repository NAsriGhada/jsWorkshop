// // A JavaScript function is a block of code designed to perform a particular task.

// // A JavaScript function is executed when "something" invokes it (calls it).

// /* A function is simply a piece of code that can be used over and over again. A variable holds a value but functions can hold one or more code lines */

// // ! syntax
//         // todo Function Declarations
// function logger(){
//     console.log("My name is Ghada")
// }
// //calling or invoking the function
// logger()
// logger()
// logger()
// //it will run 3 times

//     // ? a function must have a return statement
// function multiply(){
//     return 10 * 100
// }
// console.log(multiply()) 


//     // ? a function can have parameters
//     // ? ecmascript template literals
// function fruitProcessor(apples, oranges){//once the function is called they will be defined
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     //we can return any value from the function and these values can be used anywhere later in the code
//     return juice
// };
// fruitProcessor(20, 30)//here the code will only define the parameters and if we want the function code to be executed we need to store it
// const myJuice = fruitProcessor(5,0);
// console.log(myJuice)

//     // ? using a function inside another function
// function addFruit(banana){
//     const addingBanana = `${fruitProcessor(50, 100)} and ${banana} bananas`
//     return addingBanana
// }
// const addedFruit = addFruit(40)
// console.log(addedFruit)

// // ! Function Expressions
// // A JavaScript function can also be defined using an expression.

// // It is called anonymous function

// // A function expression can be stored in a variable:

// const description = function(firstName, currentJob){
//     return `My name is ${firstName} and I am a ${currentJob}`
// }
// const storeDesc = description('Ghada', 'FullStack JS Instructor')
// console.log(storeDesc)

// // ! Function Hoisting
//     // todo global variables
    const globalVar = function speakingLanguages(){
        const language = "Spanish";
           switch (language) {
               case "Chinese or Mandarian": 
                console.log("largest number of native speakers")
               break;
               case "Spanish":
                   return '2nd place in number of native speakers'
               break;
               case "English":
                   console.log('3rd place')
               break;
               case "Hindi":
                   console.log('Number 4')
               break;
               case "Arabic":
                   console.log('5th most spoken language')
               break;
               default:
                   console.log('Great language too :D' )
           }
           return language
       }
       
           function spokenLanguage(){
               return `Spanish holds the ${globalVar()}`
           }
           const spanish = spokenLanguage()
           console.log(spanish)


