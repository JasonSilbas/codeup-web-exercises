"use strict";


console.log ('Hello, from the javascript console');

alert("you just won a new ipad!");

// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false

var userInput = prompt('Please type something:');
console.log('The user entered: ' + userInput);