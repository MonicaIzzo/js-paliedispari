console.log("JS OK");

//# Mi setto le variabili di comodo.
let numberRandom = "";
let risult = "";
let alternative = "";

// # Recupero gli elementi dal DOM.

const numberField = document.getElementById("number");
const selectField = document.getElementById("alternative");
const buttonPariDispari = document.getElementById("BtnPariDispari");
const resultPariDispari = document.getElementById("resultNumber");

function IsEven(number) {
  if (number % 2) return false;
  else return true;
}

// # Metto in ascolto il BOTTONE.
buttonPariDispari.addEventListener("click", function () {
  const number = parseInt(numberField.value);
  console.log(number);

  //# Validazione
  if (number > 5 || isNaN(number) || number < 1) {
    alert("Hai inserito un numero non valido. Riprova");
    numberField.value = null;
    return;
  }
  // Creo un numero Random
  numberRandom = Math.floor(Math.random() * 100);
  console.log(numberRandom);
  // Sommo i 2 numeri
  risult = parseInt(number) + parseInt(numberRandom);
  console.log(risult);

  // individuo qual'è la scelta giusta.
  const alternativaScelta = IsEven(risult) ? "even" : "odd";
  console.log(alternativaScelta);

  //# Stabilisco il vincitore
  const winner = selectField === alternativaScelta ? "Utente" : "Computer";
  console.log("la somma è: " + risult + ". Ha vinto il " + winner);

  //# Stampo il vincitore
  resultPariDispari.innerText =
    "il numero uscito è il: " + risult + " Ha vinto: " + winner;
});
