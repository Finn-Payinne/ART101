// Clicker button progrm
let count=0
$("#needy-button").click( function() {
    // What to do when button is clicked
count = count + 1;
$("#needy-button") .html("Ouch! x" + count);
} )