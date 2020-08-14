//loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//string length
function string_length() {
    var str = "sunshine";
    var statement = "The number of characters in the word 'sunshine' are: ";
    var len = str.length;
    var answer = statement + len;
    document.getElementById("str_length").innerHTML = answer;
}

//for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//array
function array_Function() {
    var rona = [];
    rona[0] = "no";
    rona[1] = "yes";
    document.getElementById("Array").innerHTML = "Does Karen have the Rona?: " + rona[1];
}

//constant
function constant_function() {
    const team_RWBY = {R:"Ruby Rose", W:"Weiss Schnee", B:"Blake B."};
    team_RWBY.B = "Blake Belladonna";
    team_RWBY.Y = "Yang Xiao Long";
    document.getElementById("Constant").innerHTML = 
    "The members of Team RWBY are: " + team_RWBY.R + ", " + team_RWBY.W + ", " + team_RWBY.B + ", " + team_RWBY.Y + ".";
}

//let
function let_function() {
    var X = 21;
    document.write(X);
    {
        let X = 20;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}

//return
function return_function (name) {
    return "Hello " + name + ".";
}
document.getElementById("return_str").innerHTML = return_function("Bob");

//creating an object w/let
let car = {
    make: "Toyota ",
    model: "Corolla ",
    year: "2000 ",
    color: "silver ",
    description: function() {
        return "My car is a " + this.color + this.year + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML = car.description();

//loop with a break
var break_text = "";
var bv;
for (bv = 0; bv < 6; bv++) {
  if (bv === 2) { break; }
  break_text += "The number is " + bv + "<br>";
}
document.getElementById("break").innerHTML = break_text;

//loop with a contine
var continue_text = "";
var cv;
for (cv = 0; cv < 6; cv++) {
    if (cv === 0) { continue; }
    continue_text += "The number is " + cv + "<br>";
  }
  document.getElementById("continue").innerHTML = continue_text;