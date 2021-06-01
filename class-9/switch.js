
let names = prompt("write a color name");

switch (names) {
    case "red":
    case "pink":
        alert('red');
        break;
    case "blue":
        alert('blue');
    default:
        console.log("default condition");
}
switch case

let rollnumb = prompt("what is your Roll Number?");

switch (rollnumb) {
    case "one":

        alert("First position holder");
        break;
    case "four":

        alert("second position holder");
        break;
        default:
                console.log("default condition");
}

let games = ["cricket", "basketball", "volleyball", "tennis"]

for (let i = 0; i < games.length; i++) {
    if (games[i] == "cricket") {
        alert("yes it exists");
    } 

}

