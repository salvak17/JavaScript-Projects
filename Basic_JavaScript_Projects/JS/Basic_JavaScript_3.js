function assignment_8_function() {
    var assignment8_result = 6 + 3;
    document.getElementById("Math").innerHTML = "6 + 3 = " + assignment8_result;
}

function assignment_9_function() {
    var assignment9_result = 6 - 3;
    document.getElementById("Subtraction").innerHTML = "6 - 3 = " + assignment9_result;
}

function assignment_10_function1() {
    var assignment10_result1 = 6 * 3;
    document.getElementById("Multiplication").innerHTML = "6 x 3 = " + assignment10_result1;
}

function assignment_10_function2() {
    var assignment10_result2 = 6 / 3;
    document.getElementById("Division").innerHTML = "6 / 3 = " + assignment10_result2;
}

function assignment_11_function() {
    var assignment11_result = 3 * (2 + 1) / 3;
    document.getElementById("Multiple_Math").innerHTML = "3 * (2 + 1) / 3 = " + assignment11_result;
}

function assignment_12_function() {
    var assignment12_result = 23 % 4;
    document.getElementById("Modulus").innerHTML = "The remainder of 23 / 4 is " + assignment12_result;
}

function assignment_13_function() {
    var assignment13_result = 15;
    document.getElementById("Negative").innerHTML = "The opposite of 15 is " + -assignment13_result;
}

function assignment_14_function1() {
    var assignment14_result1 = 9;
    assignment14_result1++;
    document.getElementById("Increment").innerHTML = assignment14_result1;
}

function assignment_14_function2() {
    var assignment14_result2 = 9;
    assignment14_result2--;
    document.getElementById("Decrement").innerHTML = assignment14_result2;
}

window.alert(Math.random()); //assignment 15

window.alert(Math.random() * 100); //assignment 15

function challenge_3_function() {
    document.getElementById("math_object").innerHTML = Math.round(7.5);
}