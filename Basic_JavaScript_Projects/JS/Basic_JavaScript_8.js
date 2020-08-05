function assignment_34_function() {
    var part1 = "I am currently ";
    var part2 = "listening to ";
    var part3 = "background music."
    var complete_sentence = part1.concat(part2, part3);
    document.getElementById("concatenate").innerHTML = complete_sentence; //uses concat() method
}

function assignment_35_function() {
    var Sentence = "Llamas are cool";
    var Section = Sentence.slice(0, 5);
    document.getElementById("Slice").innerHTML = Section; // uses slice() method
}

function assignment_36_function1() {
    var str = "Llamas are cool!";
    var res = str.toUpperCase();
    document.getElementById("Upper_Case").innerHTML = res;
}

function assignment_36_function2() {
    var str2 = "Llamas are paradise";
    var res2 = str2.search("paradise");
    document.getElementById("Search").innerHTML = res2;
}

function assignment_37_function() {
    var X = 150;
    document.getElementById("to_string").innerHTML = X.toString(); //uses toString() method
}

function assignment_38_function() {
    var X = 23849.4123998487223;
    document.getElementById("to_precision").innerHTML = X.toPrecision(10); //uses toPrecision() method
}

function assignment_39_function1() {
    var X = 3.14159265359;
    document.getElementById("to_fixed").innerHTML = X.toFixed(2); //uses toFixed() method
}

function assignment_39_function2() {
    var X = 20;
    document.getElementById("value_of").innerHTML = X.valueOf(); 
}