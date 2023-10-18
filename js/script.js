// test
// alert("Ciao");

// Raccolta dati

// chilometri
const km = parseInt(prompt("Quanti chilometri vuole percorrere?"));
console.log(km, typeof km);

// età
const age = parseInt(prompt("Quanti anni ha?"));
console.log(age, typeof age);

// Logica programma

// prezzo
const basePrice = km * 0.21;
console.log(basePrice, typeof basePrice);

let price = "";

if (age < 18) {
    price = basePrice - (((km * 0.21) / 100) * 20);
    console.log(price, typeof price);
} else if(age >= 65) {
    price = basePrice - (((km * 0.21) / 100) * 40);
    console.log(price, typeof price);
} else {
    price = basePrice;
    console.log(price, typeof price);
}

let result = Number(price.toFixed(2));
console.log(result, typeof result);

let message = `Il prezzo del suo biglietto sarà: ${result} €`;

// output
document.getElementById("msg").innerHTML = message;