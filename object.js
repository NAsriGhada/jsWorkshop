// creating an object book
let bookObj = {
    name: 'The Lord of The Rings',
    // key value pair
    // key value pairs are properties
    author: 'J. R. R. Tolkien',
    pagesNumber: 1178,
    publishedYear: 1954,
    // this is an object method
    // An object method is a function definition stored as a property value.
    // If you access it without (), it will return the function definition
    amazingBook: function(){
        return `${this.name} is such an amzaing story`
    }
}
// ! Accessing Object Properties
    //  ? Dot notation
console.log(bookObj.amazingBook())

    // ? Bracket notation
console.log(bookObj['author'])

// ! Adding properties
bookObj.nationality = "English"
console.log(bookObj)

// ! Looping through an object
for(book in bookObj){
    console.log(book)
    console.log(bookObj[book])
}