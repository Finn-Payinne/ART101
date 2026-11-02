


let environmentTitle = "Bingo";
let environmentElements = ["leon", "flash grenade", "infinite rocket-launcher", "exploding barrel", "ganados"]

let mainEntity = {
    name: "Leon S. Kennedy",
    type: "soft border",
    moods: ["witty", "tired", "hurt", "invigorated", "curious", "pain"],
    ammo: ["0", "30 bullets", "1 flash grenade", "infitine (rocket-launcher)", "2 (handgun)", "knife and 20 bullets (handgun)", "6 (shotgun) and 1 (magnum)", "15 (handgun) and 2 (grenade)"],

    

};



let count = 0;


$("#leon-stats").click(function () {
    count = count + 1;
    let arrayPosition = count;
    let currentMood = mainEntity.moods[arrayPosition];
    let ammo = mainEntity.ammo[arrayPosition]
    let environment = environmentElements[arrayPosition]
    let message = "<p>You checked on leon " + count + " times.</p>";

    message = message + "<p>Name: " + mainEntity.name + ".</p>";
    message = message + "<p>Leon feels " + currentMood + ".</p>";
    message = message + "<p>Nearby: " + environment + ".</p>";
    message = message + "<p>Ammo: " + ammo + ".</p>";


    $("#output").html(message);


    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
    console.log(ammo);
});

// if button is clicked, background and images change, so show that I had another environment ready...

$("#castle-button").click(function () {
    environmentTitle = "The Castle";
    let message = "<p>Environment changed to <strong>" + environmentTitle + "</strong>!</p>";
    $("#castle-output").html(message);
    $("#castle-environ").addClass("castle-style");
    
    environmentElements = ["leon w/ shirt", "crate", "ammo", "castle ganados"];
    count = 0;
    $("body").addClass("castle-active");
    
    $("#castle-output").html(message);
})


// MY FAILED ATTEMPT @ PROMPT BUTTON:

/* function askEnviron (_whatEnviron) {
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