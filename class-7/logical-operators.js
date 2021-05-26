//need to make a fruitchart//
/*we need apple, banana and orange for that; 
 but we can make a fruitchart having any two of them */

/*let IsApple = true;   //is avaibale//
let IsOrange = true;  //is avaiable//
let IsBanana = false; //is not avaibale//

let CanMakeChart = (IsApple && IsOrange) || (IsApple && IsBanana) || (IsOrange && IsBanana);
alert(CanMakeChart);


    let IsOxygen = true;
    let IsFood = true;
    let IsWater = false;

    let CanSurvive = (IsOxygen && IsFood) || (IsOxygen && IsWater) || (IsFood && IsWater);
    alert(CanSurvive);

  //if / else//
   let ObtMarks = 50;

   if (ObtMarks >= 50) {
     alert('pass');
   } else {
      alert ('fail');
   }
  // if condition//
   let IsNight = true;
    if (IsNight === true){
        alert(IsNight)
    }*/

 const EveningTime = 19; //07:00 PM
 let hours = new Date().getHours(); //current time (jo b time hoga)
 if (hours >= EveningTime){
  alert('TURN THE LIGHT ON');
}

const Night = 19;
let CurrentHours = new Date().getHours();
if (CurrentHours >= Night) {
    alert('on');
}

