
/*step 1) create an array 
step2) using while loop print array's members in ascending order*/

let games = ["1Football", "2BasketBall", "3Cricket", "4hockey"];

let i = 0;
while (i < games.length) {
    console.log(games[i]);
    i = i + 1;
}

//while loop

let Room42 = ["Abida", "Tamkeen", "Swera", " Ujala"];

let a = 0;
while (a < Room42.length) {
    console.log(Room42[a]);
    a = a + 1;
}


let animals = ["cow", "dog", "cat", "monkey"];

animals.forEach(myitemFunction);

function myitemFunction(items) {
    console.log(items);
}

let son = ["ali", "ahmed", "kasif", "khan"];
son.forEach(SonsNames);

function SonsNames(count) {
    console.log(count);
}

//while loop
let classes = ["one", "two", "three"];
let w =0;
while(w < classes.length){
    console.log(classes[w]);
    w= w+1;
}

//for each loop

let sectors = ["G7","G8","G9","G10"]

sectors.forEach(SectorNames);

function SectorNames (list){
    console.log(list);
}
