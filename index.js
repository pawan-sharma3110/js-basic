function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
var c = a;
a = b;
b = c;

/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}
console.log(test());


// age counter

var dogAge = prompt("Write your dog age here.");
var humanAge = (dogAge -2)*4+21;
alert("Human age is" + " "+ humanAge);