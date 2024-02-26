// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector("form").onsubmit = (event) => {
//     event.preventDefault(); // Prevent form submission

//     const base = document.querySelector("#local_currency").value;
//     fetch(
//       `https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=${base}`,
//       {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "0caaa2d943mshd73e0e4af129428p13062bjsn9351c7998dfd",
//           "X-RapidAPI-Host":
//             "currency-conversion-and-exchange-rates.p.rapidapi.com",
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const amount = document.querySelector("#amount").value;
//         const foreignCurrency =
//           document.querySelector("#foreign_currency").value;
//         const rate = data.rates[foreignCurrency];

//         function convert() {
//           return amount * rate;
//         }

//         document.querySelector(
//           "#result"
//         ).innerHTML = `${amount} ${base.toUpperCase()} is equal to ${foreignCurrency} ${convert().toFixed(
//           4
//         )}`;
//       })
//       .catch((error) => {
//         console.log("Error: ", error);
//       });
//     return false;
//   };
// });
var input_amount = document.getElementById("original-currency-amount");
var from_currency = document.getElementById("from_currency");
var to_currency = document.getElementById("to_currency");
var exchange_rate = document.getElementById("exchange-rate");
var exchange = document.getElementById("exchange");
var output_amount = document.getElementById("output-text");
var output_from = document.getElementById("from");
var output_to = document.getElementById("to");
exchange.addEventListener("click", () => {
  [from_currency.value, to_currency.value] = [
    to_currency.value,
    from_currency.value,
  ];
  calculate();
});
var to_amount = 0;
function calculate() {
  const from_currency_value = from_currency.value;
  const to_currency_value = to_currency.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency_value}`)
    .then((res) => res.json())
    .then((res) => {
      const rate = res.rates[to_currency_value];
      exchange_rate.value = `${rate}`;
      to_amount = (input_amount.value * rate).toFixed(3);
      output_from.innerText = `${input_amount.value} ${from_currency_value}`;
      output_to.innerText = `${to_amount} ${to_currency_value}`;
      output_amount.style.display = "block";
    });
}
document.getElementById("exchange_button").addEventListener("click", () => {
  calculate();
});
