let sceltaPar = prompt("Scegli tra pari o dispari");
console.log(sceltaPar);

let sceltaNum = parseInt(prompt("Scegli un numero compreso tra 1 e 5"));
console.log(sceltaNum);

function numeroRandom(min, max){
    let numero = Math.floor((Math.random() * max) + min)
    return numero;
}

let numeroCasuale = numeroRandom(1, 5);
console.log(numeroCasuale);

function sommaParidispari(num1, num2){
    let somma= num1 + num2
    if(somma % 2 === 0){
        check = true
        console.log("La somma è pari");
    }else{
        check = false
        console.log("La somma è dispari")
    }
};

let risultato = sommaParidispari(numeroCasuale,sceltaNum);

if(check === true && sceltaPar === "check"){
    document.writeln("L'utente ha vinto")
}else{
    document.writeln("Il computer ha vinto")
};