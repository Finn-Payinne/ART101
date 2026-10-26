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
    let message = "<p>You checked on leon " + count + " times.</p>";

    message = message + "<p>Leon feels " + currentMood + ".</p>";
    message = message + "<p>Name: " + mainEntity.name + ".</p>";
    message = message + "<p>Nearby: " + environmentElements.arrayPosition + ".</p>";
    message = message + "<p>Ammo: " + ammo + ".</p>";


    $("#output").html(message);


    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
    console.log(ammo);
});

