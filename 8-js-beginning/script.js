let message = "hello";
let number = 424;
let number2 = 452;
let steppi = "soviet be there"
const array1 = [50,10,24,53,243]
const myParagraph = document.getElementById("calc")
var wasItRight = document.getElementById("wasItRight");
realAnswer = "ege";

const recipe = {
    duration: "30min",
    fko: "40min"
}



function clicked() {
    if (document.getElementById("input").value == realAnswer) {
    console.log("worked!")
    wasItRight = "right";
    console.log(recipe.duration)
    } else {
    wasItRight = "wrong";
}



if (number < number2) {
    console.log("its true!")
    myParagraph.innerHTML = number2;
    console.log(myParagraph)

}   
}



for (let i = 1; i < 100; i++){
    console.log(i%5)
}


