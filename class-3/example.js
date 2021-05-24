function checkIt() {
  //access input element//
  let InputElement = document.querySelector('input');
  console.log(InputElement);

  //get value of html element//
  let inputValue = InputElement.value;
  console.log(inputValue);

  //access h1 element//
  let heading = document.querySelector('h1 span');
  console.log(heading);

  //Change content of h1//
  heading.innerHTML = inputValue;


}
function clickMe() {
  let inputEl = document.querySelector('.input');
  console.log(inputEl);

  let inputVal = inputEl.value;
  console.log(inputVal);

  let heading2 = document.querySelector('.head1 span');
  console.log(heading2);

  heading2.innerHTML = inputVal;
}

function clickOnly() {
  let Input2 = document.querySelector('.input2');
  console.log(Input2);

  let invalue = Input2.value;
  console.log(invalue);

  let head2 = document.querySelector('h2 .span2');
  console.log(head2);

  head2.innerHTML = invalue;
}