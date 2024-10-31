//2) Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o somatório desses números na tela. Após exibir a soma, o programa deve mostrar também os números que o usuário digitou, um por linha. 

let vetor = [];
let soma = 0 

for (let i = 0; i < 5; i++){
    vetor[i]= Math.floor(Math.random()*10)/*gerou 5 numeros aleatorios*/
    soma += vetor [i]
}
console.log("Vetor digitado:"+vetor)
console.log("Soma dos valores do vetor:"+soma)