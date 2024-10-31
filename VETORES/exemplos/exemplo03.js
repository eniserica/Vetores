let numero = [], acumuladora = 0;

for (i = 0 ; i < 5 ; i ++){
    numero[i] = Number (prompt("Digite um número: "))
    
}

for (let i = 0; i < numero.length; i ++){
    acumuladora = acumuladora + numero[i]
 } 
document.write (`<p>Os números digitados foram${numero}</p>`)
document.write(`<p>O somatorio deles é: ${acumuladora}</p>`)
