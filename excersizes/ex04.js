// Clicker button progrm
let count=0
let colors=["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];
$("#needy-button").click( function() {
    // What to do when button is clicked
count = count + 1;
$("#needy-button") .html("Ouch! x" + count);
} )
