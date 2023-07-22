/*
- **0**
  - Mi setto delle variabili di comodo.
- **1**
  - Chiedo all'utente tramite il pront un numero da 1 a 5
  - **1b** 
    - Valido l'imput inserito 
- **2**
  - Genero un numero random
- **3**
  - Sommo i 2 numeri
- **4**
  - stabilisco se la somma dei 2 numeri e pari o dispari
- **5**
  - Dichiaro chi ha vinto
**FINE** 
*/

//#0 Mi setto le variabili di comodo.
let number = "";
let numberRandom = "";
let risult = "";

//#1 inserisco il pront per il numero da 1 a 5
number = prompt("Inserisci un numero da 1 a 5");
console.log(number);

//# 1b** Validazione
if (number > 5) {
  number = prompt(
    "Hai inserito un numero maggiore di 5. Inserisci un numero da 1 a 5"
  );
} else {
  //#2 Genero un numero random
  numberRandom = Math.floor(Math.random() * 100);

  console.log(numberRandom);

  //#3 Sommo i 2 numeri
  risult = parseInt(number) + parseInt(numberRandom);
  console.log(risult);

  //#4 stabilisco se la somma dei 2 numeri e pari o dispari
  function IsNotUneven(risult) {
    if (isNaN(risult) == false) {
      return risult % 2 == 1 ? true : false;
    } else {
      return null;
    }
  }

  //#5 Dichiaro chi ha vinto

  if (IsNotUneven(1)) {
    alert("Numero dispari");
  } else {
    alert("Numero pari");
  }
}
