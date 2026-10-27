// Clicker button progrm
let count=0; 
let colorsCount=0;

let colors=["green", "orange", "brown", "blue", "gold", "purple", "red", "pink"];

let buttontext="";

$("#needy-button").click( function() {
    // What to do when button is clicked
count = count + 1;


console.log(count);
console.log(colors[colorsCount])

buttontext="Horse x" + count + " and color is " + colors[colorsCount];

$("#needy-button") .html( buttontext );

$("body").css("background-color", colors[colorsCount] );

$("body").append(" <img width='50' img src='images/" +colors[colorsCount] +".gif'>");
// if we run out of colors, start from the first color
colorsCount = colorsCount + 1;
if ( colorsCount >= 8 ) { colorsCount = 0; }


} );
