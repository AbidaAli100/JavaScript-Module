function check(){
    let InputElement =document.querySelector ('input');
 console.log(InputElement) ;

 //access the value of input//
 let attrElement = document.querySelector('input').value;
 console.log (attrElement)

//  access value of input//
let attributeValue = InputElement.placeholder;
console.log (attributeValue);

//acces <h1> element//
  document.querySelector ('#heading-1').innerHTML = attrElement;

}


