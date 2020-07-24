//Assignment 31
    //global variable
var X = 15;
function assignment_31_function1() {
    document.write(15 + X + "<br>");
}
function assignment_31_function2() {
    document.write(X + 10 + "<br>");
}
assignment_31_function1();
assignment_31_function2();
    //local variable
function assignment_31_function3() {
    var Y = 10;
    document.write(10 + Y + "<br>");
}
function assignment_31_function4() {
    //would add var Y = 10; here locally or outside to make globally
    console.log(Y + 40 + "<br>");//changed from document.write(Y + 40 + "<br>"); to console.log() to debug
}
assignment_31_function3();
assignment_31_function4();

function get_Date() {
    if (new Date().getHours() < 17) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Assignment 32: write an if/else statement w/instructions and a button
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 16) {
        Drive = "You are able to obtain a license in Nevada.";
    }
    else {
        Drive = "You are not able to obtain a license in Nevada";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drive;
}

//Assignment 33: Use else if
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}