


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
    let message = "" + environmentTitle + "";
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

/* LAB 6 Mouse enters a html element and text will appear
 */
$("#leon").mousedown(function () {
    alert("Leon Kennedy: Government Agent, survivor of the Raccoon City Incident. Recently assigned to protect the Presidents daughter, Ashley Graham, who has been kidnapped by a mysterious community in rural spain. Something's off about this place...");
});
$("#flash").mousedown(function () {
    alert("A trusty Flash Grenade. You'll need this later, they're sentitive to light.")
})
$("#barrel").mousedown(function () {
    alert("Woah! Careful where you shoot that thing! This barrel is full of highly flameable chemicals, ready to burst at a single spark.")
})

$("#rocket").mousedown(function () {
    alert("A classic Rocket-Launcher, some say the ammo on this bad boy is infinite... Only one way to find out.")
})

$("#ganados").mousedown(function () {
    alert("'Ganados', locals of Valdabos, Spain. They seem to have been infected with some sort of virus. Perhaps some variant of the G-virus? Be careful around them. ")
})

$("#castle-leon").mousedown(function () {
    alert("Hm. Leon seems to have lost his jacket...")
})

$("#ashley").mousedown(function () {
    alert("Ashley Graham, the Presidents daughter abducted by the Los Illuminados cult on her way home from college. She's concerned that her father only sent one guy to rescue her, but she trusts Leon.")
})

$("#castle-ganados").mousedown(function () {
    alert("Zealots, the castle followers of Osmund Saddler and his cult. They are equipped with better weapons than the local infected ganados of Valdabos, be careful.")
})

$("#ammo").mousedown(function () {
    alert("A box of handgun ammo x15! A useful find in the echoing halls of the castle, if only it wasn't surrounded by cultists...")
})

$("#crate").mousedown(function () {
    alert("A crate. Maybe there's an herb inside?")
})

