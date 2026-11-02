function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");
    if (userNumber == whatNumber) {
        $("#output").html("You got it!");
    } else {
        $("#output").html("Noooooope");
    }
}

$("#good-button").click(function () {
    askNumber(7);
});

/* function askEnviron (whatEnviron) {
    let userEnviron = prompt("village or castle?");
        if (userEnviron == "castle") {
            $("#castle-environ").html("You have entered the Castle");
         } else {
        $("#output").html("You remain in the Village");
         }
        }

        $("castle-button").click(function () {
            askEnviron("castle")
        }) */