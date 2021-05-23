function checkIt(){
    //access input element//
   let InputElement = document.querySelector ('input');
   console.log(InputElement);
   
   //get value of html element//
   let inputValue = InputElement.value;
   console.log (inputValue);

   //access h1 element//
 let heading = document.querySelector('h1');
 console.log (heading);

 //Change content of h1//
 heading.innerHTML= inputValue;
   

}