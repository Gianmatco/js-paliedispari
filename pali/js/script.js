/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

let userName = prompt('inserisci un nome');
console.log(userName)



function parolaPalindroma (parola){
    
    let lettere = parola.split('');
    
    console.log(lettere);
    let parolaGirata = '';
    for(let i = lettere.length - 1; i >= 0; i--){
        parolaGirata += lettere[i];
    }
    if(parolaGirata === userName){
        document.writeln('questa parola è palindroma');
    }else{
        document.write('questa parola non è palindroma');
    }

    
    return parolaGirata;

}

parolaPalindroma(userName);