// Clicker button progrm
let count=0

let colors=["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];

let buttontext="";

$("#needy-button").click( function() {
    // What to do when button is clicked
count = count + 1;

console.log(count);
console.log(colors[count-1])

buttontext="Ouch x" + count + " and color is " + colors[count-1];

$("#needy-button") .html( buttontext );

$("body").css("background-color", colors[count-1] );

$("body").append(" <img src='" +colors[count-1] +".gif'>");


} )
