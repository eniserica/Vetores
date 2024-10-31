let tempAnual = [] 
let mediaTemp, acumuladora = 0 

//1º - ARMAZENAR DADOS NA ESTRUTURA DE DADOS 
for (let i = 0; i < 12; i ++){
    tempAnual[i] = Number(prompt("Digite a temperatura do mês"))
}

//2º - MOSTRAR AS INFORMAÇÕES DO ARRAY DE FORMA INDIVIDUAL
for (let i = 0; i < tempAnual.length; i ++){
   acumuladora = acumuladora + tempAnual[i]
} 
// mediaTemp = acumuladora / 12 
mediaTemp = acumuladora / tempAnual.length

console.log ( typeof tempAnual)
console.log ( typeof 12)
console.log (mediaTemp)

document.write(`<p>Temp.Anual: ${tempAnual}</p>`) 
document.write(`<p>Média da temp.Anual: ${mediaTemp}</p>`) 


