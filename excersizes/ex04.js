// Clicker button progrm
let count=0; 
let colorsCount=0;

let colors=["green", "orange", "brown", "blue", "gold", "purple", "grey", "pink"];

let buttontext="";

$("#needy-button").click( function() {
    // What to do when button is clicked
count = count + 1;


console.log(count);
console.log(colors[colorsCount])

buttontext="Horse x" + count + " and color is " + colors[colorsCount];

$("#needy-button") .html( buttontext );

$("body").css("background-color", colors[colorsCount] );

$("body").append(" <img width='70' img src='images/" +colors[colorsCount] +".gif'>");


// if we run out of colors, start from the first color
colorsCount = colorsCount + 1;

if ((count > 10) && (count <= 20)) {  $("#needy-button").after("<p>mood is... hoarse *cough* *cough*</p>");}
else if ((count >= 5) && (count < 10)) {$("#needy-button").after("<p>mood is... horsing around</p>");}
else if (count < 5) { $("#needy-button").after("<p>mood is... giddy!</p>"); }

if (count == 67) {$("#needy-button").after("<p>HA 67! Thiks Theven! </p>");
    $("body").append(" <img width='70' img src='images/sixseven.gif'>");
}


if ( colorsCount >= 8 ) { colorsCount = 0; }


} );
