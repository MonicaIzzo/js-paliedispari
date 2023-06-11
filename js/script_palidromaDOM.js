console.log ('JS OK');

let carattere;
let parolaInversa = '';

// #recupero gli elementi dal DOM.

const parolaField = document.getElementById('parola');
const button = document.getElementById('BtnPalindroma');
const resultElement = document.getElementById('result');



button.addEventListener ('click', function() {
  let parola = parolaField.value.trim();
  console.log(parola);
  let i = parola.length - 1;

  while (i >= 0) {
  carattere = parola[i];
  parolaInversa += carattere;
  console.log(carattere);
  i--;
}
console.log('la parola inversa è ' + parolaInversa);

if(parola == parolaInversa){ // verifico che la condizione sià vera.
// #SE la parola è polindroma, il messaggio sarà: la parola è palindroma.    
     resultElement.innerText ='BRAVO! la parola inserita è palindroma';
     parolaInversa = '';
// #SE INVECE la parola non è polindroma, il messaggio sarà: la parola non è palindroma.    
  } else {
    resultElement.innerText ='PECCATO! la parola non è palindroma';
    parolaInversa = '';
  }
console.log(parola);
console.log(parolaInversa);
});






