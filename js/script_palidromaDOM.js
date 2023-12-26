console.log("JS OK");

let carattere;
let parolaInversa = "";

// #recupero gli elementi dal DOM.

const parolaField = document.getElementById("parola");
const buttonPalindroma = document.getElementById("BtnPalindroma");
const resultPalindroma = document.getElementById("resultWord");

buttonPalindroma.addEventListener("click", function () {
  let parola = parolaField.value.trim();
  console.log(parola);
  parola = parola.toLowerCase();
  console.log(parola);
  let i = parola.length - 1;

  while (i >= 0) {
    carattere = parola[i];
    parolaInversa += carattere;
    console.log(carattere);
    i--;
  }
  console.log("la parola inversa è " + parolaInversa);

  if (parola == parolaInversa) {
    // verifico che la condizione sià vera.
    // #SE la parola è polindroma, il messaggio sarà: la parola è palindroma.
    resultPalindroma.innerText = "BRAVO! la parola inserita è palindroma";
    parolaInversa = "";
    // #SE INVECE la parola non è polindroma, il messaggio sarà: la parola non è palindroma.
  } else {
    resultPalindroma.innerText = "PECCATO! la parola non è palindroma";
    parolaInversa = "";
  }
  console.log(parola);
  console.log(parolaInversa);
});
