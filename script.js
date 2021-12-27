// =======>>> Exercise 1 <<<=======
// Write the destructuring assignment that reads:
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

let user = {
    name: "John",
    years: 30
}
let {name,years,isAdmin}=user;
console.log(user);
AdminType = typeof(isAdmin);

isAdmin = (AdminType != 'undefined') ? isAdmin : false ;

console.log(name,years,isAdmin)





// =======>>> Exercise 2 <<<=======
// Exercise 2
// Give the right name:
// Create the variable with the name of our planet. How would you name such a variable?

const redPlanet = 'Mars';

// Create the variable to store the name of the current visitor. How would you name that variable?

let visitor = 'Ehsan Bazaei';





// =======>>> Exercise 3 <<<=======
//Look at the code. What will be result of the call at the last line and why?
// let phrase = "Hello"
// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`)
//   }
// }
// sayHi()

var Answer3 = "Answer 3 : by Alert Show: 'Hello, john'"
console.log(Answer3)




// =======>>> Exercise 4 <<<=======
// Exercise 4
// Write the code, one line for each action:
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

//Methode 1
let userA = Object();
userA ['name'] = 'John';
userA ['surname'] = 'Smith';
userA ['name'] = 'Peter';
delete userA.name;
console.log(userA);

//Methode 2
let userB = {}
userB.name = 'John';
userB.surname = 'Smith';
userB.name = 'Peter';
delete userB.name;
console.log(userB);


// =======>>> Exercise 5 <<<=======
//Is it possible to change an object declared with const, how do you think and why?
const userC = {
    name: "ehsan1"
}
// does it work?
userC.name = "ehsan2"
console.log(userC)

var Answer5 = "Answer 5: Normally, it const value not possible to change. But in this code sample mode it is possible."
console.log(Answer5)



// =======>>> Exercise 6 <<<=======
// We have an object storing salaries of our team:
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}
let Values = Object.values(salaries);
let plusValue = 0;

for(i=0;i<Values.length;i++){
    if(typeof(Values) === undefined ){
        plusValue = 0;
    }else{
        plusValue += Values[i];
    }
}

console.log(plusValue);



// =======>>> Exercise 7 <<<=======
//Rewrite this if using the ternary operator '?':
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }


let a = 1;
let b = 2;

let resultPlus= (a + b < 4)? 'Below':'Over';

console.log(`Comparison result is:${resultPlus}`);

// =======>>> Exercise 8 <<<=======

// Rewrite if..else using multiple ternary operators '?'.
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = 'Director'

let message= (login === 'Employee')? 'Hello':(login === 'Director')? 'Greetings':(login == '')? 'No login': '';

console.log(`Your message is:${message}`);