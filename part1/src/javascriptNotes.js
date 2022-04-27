//arrays

const t = [1, -1, 3] //define

t.push(5) //adds value to the end of the array

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})             // loops through for each value in the array
//-------------------------------------------------------------------------------

//when using react we want immutable data structures so array syntax should be
const t1 = [1, -1, 3]

const t2 = t.concat(5)

console.log(t1)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed

//create a new array instead if changing the old one
//-------------------------------------------------------------------------------

//map method
const x = [1, 2, 3]

const m1 = x.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed

//Based on the old array, map creates a new array, for which the function given as 
//a parameter is used to create the items. In the case of this example the original value is multiplied by two.

//you can completely change the format of the array as well
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed


//Individual items of an array are easy to assign to variables with the help of the destructuring assignment.
const t4 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t4

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed
//Thanks to the assignment, the variables first and second will receive the first two integers of the 
//array as their values. The remaining integers are "collected" into an array of their own which is then assigned to the variable rest.
//----------------------------------------------------------------------

