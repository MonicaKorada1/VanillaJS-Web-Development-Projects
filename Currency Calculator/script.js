const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
let amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");


function calculate(){
  
  fetch(`https://api.exchangeratesapi.io/latest?base=${currencyEl_one.value}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currencyEl_two.value];
      rateEl.innerText = `1 ${currencyEl_one.value} = ${rate} ${currencyEl_two.value}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(3);
    });
}

currencyEl_one.addEventListener("change",calculate);
amountEl_one.addEventListener("input",calculate);
currencyEl_two.addEventListener("change",calculate);
amountEl_two.addEventListener("input",calculate);

swap.addEventListener("click", function(){
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
})

calculate();