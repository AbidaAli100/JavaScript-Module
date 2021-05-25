let CostOfApples = 5;
CostOfApples = 5 + 2;
CostOfApples += 2;
CostOfApples *= 2;

  let Coins = 0;
function AddCoin() {
  
    Coins = Coins + 1;
    document.querySelector('p').innerHTML = Coins;

}


function GetCoin(){
    
    Coins = Coins + 4;
    document.querySelector('.para').innerHTML = Coins;
}