//need to make a fruitchart//
/*we need apple, banana and orange for that; 
 but we can make a fruitchart having any two of them */

let IsApple = true;   //is avaibale//
let IsOrange = true;  //is avaiable//
let IsBanana = false; //is not avaibale//

let CanMakeChart = (IsApple && IsOrange) || (IsApple && IsBanana) || (IsOrange && IsBanana);
alert(CanMakeChart);


    let IsOxygen = true;
    let IsFood = true;
    let IsWater = false;

    let CanSurvive = (IsOxygen && IsFood) || (IsOxygen && IsWater) || (IsFood && IsWater);
    alert(CanSurvive);

