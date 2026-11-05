// A says
let messagesA = ["I'm Dippy! What's your name?", "Hi charlie-boy! whazzahh?", "Awesome stuff! ", "woah! great idea!!! What are we gonna make it?", "Then pick one silly!"];
let counterA = 0
// B says

let messagesB = ["Hello, I am Charles.", "I am well.", "I would like to change the color we are in.", "I do not know...",];
let counterB = 0

// When A is clicked...
// A speaks when counterA = counterB

$("#character-a").click(function () {
        if (counterB > 3 ) { $("#answers").css("display", "flex"); }

    else if (counterA == counterB) {

        $("#chat").append("<p>Dippy: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
    }
    
});

// When B is clicked
// B speaks when counterB < counter A
$("#character-b").click(function () {



    if (counterB < counterA) {

        $("#chat").append("<p>Charles: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;

    }

});

// 