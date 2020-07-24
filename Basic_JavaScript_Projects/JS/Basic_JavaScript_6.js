function Ride_Function() { //Assignment 26, utilize ternary operator
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() { //Challenge: create a basic program using ternary operators that outputs whether or not a user is old enough to vote
    var Age, canVote;
    Age = document.getElementById("Age").value;
    canVote = (Age<18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = canVote + " to vote.";
}

function Vehicle(Make, Model, Year, Color){ //Assignment 27
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function CoffeeMaker(C_Make, C_Model, C_Color){ //Assignment 28: use new and this keyword
    this.CoffeeMaker_Make = C_Make;
    this.CoffeeMaker_Model = C_Model;
    this.CoffeeMaker_Color = C_Color;
}
var Shelby = new CoffeeMaker("Mr. Coffee", "B005MLB2S6", "Black");
var Jimmy = new CoffeeMaker("Mr. Coffee", "B002YI2IG0", "Black");
var Kirlean = new CoffeeMaker("Keurig", "K55", "Turquoise");
function assignment_28_function() {
    document.getElementById("New_and_This").innerHTML =
    "Jimmy uses a " + Jimmy.CoffeeMaker_Make + " coffee maker, model " + Jimmy.CoffeeMaker_Model + " in the color " +Jimmy.CoffeeMaker_Color;
}

function Family(Relation, Blood){ //Assignmtnt 29: use a reserved word
    this.Family_Relation = Relation;
    this.Family_Blood = Blood;
}
var Maria = new Family("mom", "true");
var Ramon = new Family("dad", float); //float is reserved word
var Rebeca = new Family("sister", "true");
function assignment_29_function() {
    document.getElementById("Reserved_Word").innerHTML =
    "Ramon is my " + Ramon.Family_Relation + ", and is " + Ramon.Family_Blood + " we're related by blood.";
}

function assignment_30_function() { //Assignment 30: nested functions
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_Point = 14;
        function Plus_One() {Starting_Point += 1;}
        Plus_One();
        return Starting_Point;
    }
}