// CHALLENGE 6: NEED TO DISPLAY "FALSE" IN THE CONSOLE USING BOOLEAN LOGIC AND THE CONSOLE.LOG() 
//METHOD; HOWEVER, WAITING ON INSTRUCTOR TO RESPOND TO EMAIL ON WHY MY CONSOLE.LOG() METHOD DOESN'T WORK
//Figured it out
console.log(2 > 5);

document.write(typeof 15);//Assignment 17: write number

//Assignment 21: type coercion
document.write("62" + 6);

//Assignment 20: perform a math operation w/the console.log() function
console.log(2 + 2); //doesn't work???

function challenge5_function1() { //Challenge 5 part 1: utilize JavaScript to make the browser display NaN
    document.getElementById("NaN").innerHTML = 0/0;
}

function challenge5_function2() { //Challenge 5 part 2: utilize isNaN() function to make the browser display "true"
    document.getElementById("true").innerHTML = isNaN('Banana');
}

function challenge5_function3() { //Challenge 5 part 3: utilize isNaN() function to make the browser display "false"
    document.getElementById("false").innerHTML = isNaN('626');
}
assignment_18_function1()
function assignment_18_function1() { //Assignment 18 part 1: write a large enough number to display "infinity"
    document.getElementById("Infinity").innerHTML = 2E310;
}

function assignment_18_function2() { //Assignment 18 part 2: write a small enough number to display "-infinity"
    document.getElementById("-Infinity").innerHTML = -3E308;
}

function assignment_19_function() { //Assignment 19: use Boolean logic to display "true"
    document.getElementById("True_Boolean").innerHTML = (15 > 13);
}

function assignment_22_function1() { //Assignment 21: use Boolean logic to display "true" using ==
    document.getElementById("Equal_True").innerHTML = (16 == 16);
}

function assignment_22_function2() { //Assignment 21: use Boolean logic to display "false" using ==
    document.getElementById("Equal_False").innerHTML = (17 == 7);
}

//Assignment 22: utilize ===
function assignment_23_function1() { //Assignment 23.1: use Boolean logic to display "true"
var X1 = (20);
var Y1 = (20);
    document.getElementById("TE1").innerHTML = (X1 === Y1);
}

function assignment_23_function2() { //Assignment 23.2: use Boolean logic to display "false"
var X2 = (5);
var Y2 = ('Six');
    document.getElementById("TE2").innerHTML = (X2 === Y2);
}

function assignment_23_function3() { //Assignment 23.3: use Boolean logic to display "false"
var X3 = (10);
var Y3 = ('Ten');
    document.getElementById("TE3").innerHTML = (X3 === Y3);
}

function assignment_23_function4() { //Assignment 23.4: use Boolean logic to display "false"
var X4 = (15);
var Y4 = (20);
    document.getElementById("TE4").innerHTML = (X4 === Y4);
}

function assignment_24_function1() { //Assignment 24.1: use AND to display "true"
    document.getElementById("AND_true").innerHTML = (2>1 && 4>3);
}

function assignment_24_function2() { //Assignment 24.2: use AND to display "false"
    document.getElementById("AND_false").innerHTML = (2>1 && 3>4);
}

function assignment_24_function3() { //Assignment 24.3: use OR to display "true"
    document.getElementById("OR_true").innerHTML = (2>1 || 3>4);
}

function assignment_24_function4() { //Assignment 24.4: use OR to display "false"
    document.getElementById("OR_false").innerHTML = (1>2 || 3>4);
}

function assignment_25_function1() { //Assignment 25.1: use ! to display "true"
    document.getElementById("NOT_true").innerHTML = !(15>20);
}

function assignment_25_function2() { //Assignment 25.2: use ! to display "false"
    document.getElementById("NOT_false").innerHTML = !(20>15);
}