const output = document.getElementById('display');
const plus = document.getElementById('plusBtn');
const minus =  document.getElementById('minusBtn');
const input = document.getElementById('input-box');


plus.addEventListener('click', (e) => {
   e.target;
   
    const currentValue = Number(input.value) + Number(output.innerText);
    output.innerText = currentValue;
  
    
    
})

minus.addEventListener('click', (e) => {
    e.target;
     const currValue =  Number(output.innerText) - Number(input.value);
     output.innerText = currValue;
 })







