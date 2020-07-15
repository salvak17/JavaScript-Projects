function firstDictionary() { //Assignment 16: create a dictionary
    var TokyoGodfathers = {
        Character1out4:"Hana",
        Character2out4:"Yasuo",
        Character3out4:"Miyuki",
        Character4out4:"Kiyoko"
    }
    //disabled for functionality: delete TokyoGodfathers.Character3out4; //Assignment 17: delete a value and call it
    document.getElementById("Dictionary").innerHTML = TokyoGodfathers.Character3out4;
}

function challenge4() { //Challenge4 create two identical keys, my guess is only one will work
    var Rainbow4 = {
        Color1out4:"Red",
        Color3out4:"Orange",
        Color3out4:"Yellow",
        Color4out4:"Green"
    }
    document.getElementById("Dictionary2").innerHTML = Rainbow4.Color3out4;
}