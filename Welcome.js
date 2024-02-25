var name = prompt("What is your name");
var firstChar = name.slice(0,1);
var captalize = firstChar.toUpperCase();
var restName =  name.slice(1, name.length);
var lastLowerCase = restName.toLowerCase();
var fullName =   captalize + lastLowerCase;
alert("Welcome, "+fullName);