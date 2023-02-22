// // Why Use Arrays?
// // If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
// // let car1 = "Saab";
// // let car2 = "Volvo";
// // let car3 = "BMW"; 
// // However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
// // The solution is an array!
// // An array can hold many values under a single name, and you can access the values by referring to an index number.


// // ! syntax
// let arr = [10, 6, 8, 900, 5, 7]

// // ! array access
// console.log(arr[4])
// // ? index always starts at 0
// // ? if index number doesn't exist it would return undefined

// // ! array property
// console.log(arr.length)
// // ? it will return the length of the array
// console.log(arr.length-1)
// // ? it will return the last index

// // ! array methods
//     // todo strings
// let arrOfStr = ['finland', 'france', 'turkey']
// console.log(arrOfStr.toString().toUpperCase())
// // Both of these methods toLowerCase() and toUpperCase(), does not take parameters or arguments.
// // These methods work upon string only.

//     // todo pushing values into arrays
// let countries = 'egypt'
// // The push() method adds a new element to an array (at the end):
// const pushedArr = arrOfStr.push(countries)
// // The push() method returns the new array length:
// console.log(pushedArr)
// console.log(arrOfStr)

//     // todo concat arrays
// const concatenateArr = arr.concat(arrOfStr)
// console.log(concatenateArr)

// * small challenge: calculate the tip + total amout to pay
const manyBills = [100, 300, 500, 250, 666, 1000, 980, 360, 150, 700, 50, 2]
function calcTip(bill){
    if( bill >= 50 && bill <= 300){
        return bill * 0.15
    }else{
        return bill * 20/100
    }
}
const manyTips = []
const total = []
for (let i = 0; i < manyBills.length; i++){
    console.log(i, manyBills[i], manyBills[i] <= 300)
    manyTips.push(calcTip(manyBills[i]))
    console.table(manyTips)
    total.push(manyBills[i] + manyTips[i])
}
const tippedSum = manyTips
console.log(tippedSum)
console.log(total)
