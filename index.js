// let isExist = false ;
// let promise = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         if (isExist) {
//             resolve("True")
//         } else {
//             reject("False")
//         }
//     }, 3000)
// });

// promise
//       .then((data) => {
//         console.log(15,data);
//       })
//       .catch((error) => {
//         console.log(18,error);
//       })

// const wrapper = document.getElementById("wrapper");

// function createdCard(arg) {
//   return `
//     <div class="card p-4 w-25">
//     <h4>userId: ${arg.userId}</h4>
//     <h4>id:${arg.id}</h4>
//     <p>${arg.title}</p>
//     <span>${arg.completed}</span>
// </div>
//     `;
// }
// document.addEventListener("DOMContentLoaded", function () {
//   fetch("https://jsonplaceholder.typicode.com/todos", {
//     method: "GET",
//   })
//     .then((res) => {
//       if (res.ok == true && res.status == 200) {
//         return res.json();
//       }
//     })
//     .then((data) => {
//       if (data.length) {
//         data.forEach((element) => {
//           const card = createdCard(element);
//           wrapper.innerHTML += card;
//         });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector("form").onsubmit = () => {
//     const base = document.querySelector("#local_currency").value;
//     fetch(`https://api.exchangerate.host/latest?/source=ecb${base}`)
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
//         ).innerHTML = `${amount} ${base.toUpperCase()} equal to ${foreignCurrency} ${convert().toFixed(
//           4
//         )}`;
//       });
//   };
// });
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector("form").onsubmit = () => {
//     const base = document.querySelector("#local_currency").ariaValueMax;
//     fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest${base}`,{
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '0caaa2d943mshd73e0e4af129428p13062bjsn9351c7998dfd',
//         'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
//       }
//     })
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
//         ).innerHTML = `${amount} ${base.toUpperCase()} equal to ${foreignCurrency} ${convert().toFixed(
//           4
//         )}`;
//       });
//   };
// });
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").onsubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    const base = document.querySelector("#local_currency").value;
    fetch(
      `https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=${base}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "0caaa2d943mshd73e0e4af129428p13062bjsn9351c7998dfd",
          "X-RapidAPI-Host":
            "currency-conversion-and-exchange-rates.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const amount = document.querySelector("#amount").value;
        const foreignCurrency =
          document.querySelector("#foreign_currency").value;
        const rate = data.rates[foreignCurrency];

        function convert() {
          return amount * rate;
        }

        document.querySelector(
          "#result"
        ).innerHTML = `${amount} ${base.toUpperCase()} is equal to ${foreignCurrency} ${convert().toFixed(
          4
        )}`;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    return false;
  };
});
