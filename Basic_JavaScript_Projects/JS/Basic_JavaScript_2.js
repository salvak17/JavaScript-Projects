function Assignment_7_Function() {
    var str="This text is blue!";
    var result=str.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML=result;
}

function myFunction() {//assignment 7
    var sentence="I am currently";
    sentence += " listening to New Rules by Dua Lipa";
    document.getElementById("Concatenate").innerHTML=sentence;
}

//Challenge 3
function challenge_3(a, b) {
var challenge_3_result = a * b;
document.getElementById("challenge3").innerHTML = challenge_3_result;
}