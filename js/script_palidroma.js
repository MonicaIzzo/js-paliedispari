// #0 dichiaro delle variabili di comodo.
// #1 Chiedo tramite il consol.log all'utente di inserire una parola.
// #2 estraggo ciascun carattere e lo inserisco in una variabile.
// #3 con il ciclo while verifico che la parola presa in input è palindroma.
// #4 Stampo in consol.log il messaggio.
// #SE la parola è polindroma, il messaggio sarà: la parola è palindroma.
// #SE INVECE la parola non è polindroma, il messaggio sarà: la parola non è palindroma.

console.log ('JS OK');

// #0 dichiaro delle variabili di comodo.
let parola ='';
let carattere;
let parolaInversa = '';

// #1 Chiedo tramite il consol.log all'utente di inserire una parola.
parola = prompt('Inserisci una parola per verificare se e polindroma');
console.log(parola );

// #2 estraggo ciascun carattere e lo inserisco in una variabile.
let i = parola.length - 1;

// #3 con il ciclo while verifico che la parola presa in input è palindroma.
while (i >= 0) {
  carattere = parola[i];
  parolaInversa += carattere;
  console.log(carattere);
  i--;
}

// #4 Stampo in consol.log il messaggio.
console.log(parolaInversa);

if(parola == parolaInversa){ // verifico che la condizione sià vera.
// #SE la parola è polindroma, il messaggio sarà: la parola è palindroma.    
     alert('BRAVO! la parola inserita è palindroma');
// #SE INVECE la parola non è polindroma, il messaggio sarà: la parola non è palindroma.    
  } else {
     alert('PECCATO! la parola non è palindroma');
  }
