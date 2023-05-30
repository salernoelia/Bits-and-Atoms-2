// let message = "hello";
// let number = 424;
// let number2 = 452;
// let steppi = "soviet be there"
// const array1 = [50,10,24,53,243]
// const myParagraph = document.getElementById("calc")
// var wasItRight = document.getElementById("wasItRight");
// realAnswer = "ege";

// const recipe = {
//     duration: "30min",
//     fko: "40min"
// }


// //if a declaration is inside or outside of a function makes a difference because of the scope
// function clicked() {
//     if (document.getElementById("input").value == realAnswer) {
//     console.log("worked!")
//     wasItRight = "right";
//     console.log(recipe.duration)
//     } else {
//     wasItRight = "wrong";
// }



// if (number < number2) {
//     console.log("its true!")
//     myParagraph.innerHTML = number2;
//     console.log(myParagraph)

// }   
// }

// for (let i = 1; i < 100; i++){
//     console.log(i%5)
// }



const num1 = 20;
const num2 = 30;
const num3 = 40;

function add(a,b,c){
    return a%b%c;
}

const addition = add(num1,num2,num3);
console.log(addition);

let sparguschlange = true

if (sparguschlange == true) {
    console.log("sparguschlange si cool")
}

const button = document.querySelector("[data-js-button]")
console.log("button: works ", button);
