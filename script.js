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


//isAdmin = (AdminType != 'undefined') ? isAdmin :false ;
// if (typeof(isAdmin) != 'undefined'){
//     isAdmin = isAdmin;
// }else{
//     isAdmin = false;
// }


// =======>>> Exercise 2 <<<=======



// =======>>> Exercise 3 <<<=======



// =======>>> Exercise 4 <<<=======



// =======>>> Exercise 5 <<<=======



// =======>>> Exercise 6 <<<=======



// =======>>> Exercise 7 <<<=======



// =======>>> Exercise 8 <<<=======