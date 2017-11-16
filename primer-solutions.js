//Try to do these on your own and checkout the console in Chrome to check your work, or if checking in node, make sure you have atleast V8.7

const magicNumbers = [72, 3, 9, 10, 65, 0, 18, 21];

// Find the largest number from the magicNumbers array => 72
const largestNum = Math.max(...magicNumbers);
console.log(largestNum, 'largest number');

/*
   Sort the numbers from highest to lowest, but leave the original array the same
   [ 72, 65, 21, 18, 10, 9, 3, 0 ]
*/

const sortedArr = [...magicNumbers].sort((a,b) => a > b ? 1 : -1); // or simply [...magicNumbers].sort((a,b) => a > b
console.log(magicNumbers, 'original numbers');
console.log(sortedArr, 'sorted numbers');

//In the above example, why did use do [...magicNumbers].sort and not just magicNumbers.sort ?

// Map over each magicNumber and increase its value by 1

const addOne = magicNumbers.map(number => ++number); //why doesn't number++ work?

const names = ['Michael', 'Ying', 'Sid', 'Ravi', 'Rodo', 'Mark'];

/*
   Turn each name into an object:
   {name:'Michael'}

*/

const namesAsObj = names.map(name => ({name}));
console.log(namesAsObj, 'names as objects')

const coolPeople = [
   {
       name: 'Michael Liendo',
       profession: 'Developer',
       yearsProgramming: 10
   },
   {
       name: 'Ravi Andulu',
       profession: 'Developer',
       yearsProgramming: 6
   },
   {
       name: 'Ying Wang',
       profession: 'Developer',
       yearsProgramming: 1
   },
   {
       name: 'Sid Dawar',
       profession: 'Developer',
       yearsProgramming: 3
   }
];

//filter the cool people so that it excludes anyone that has an 'M' in their name
// if running this in the browser, use console.table to check your result
const mMatcher = new RegExp(/m/i);
const noMsInNames = coolPeople.filter(person => !person.name.match(mMatcher));
console.log(noMsInNames, 'no M\'s are in the name values');

// Add a firstName and LastName key to each object in the array, based on the name value
const addedProps = coolPeople.map(person => {
    const [firstName, lastName] = person.name.split(' ');

    delete person.name; //optional

    return {
        ...person,
        firstName,
        lastName
    }

})

console.log(addedProps, 'firstName, lastName added')

// How many years of programming does everyone have together?

const totalYears = coolPeople.reduce((accum, val) =>  accum + val.yearsProgramming,0)
console.log(totalYears, 'total years programming');


