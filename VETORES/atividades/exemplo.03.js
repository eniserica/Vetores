//3) Crie um programa que solicite a entrada de 10 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 5. Exiba os valores dos dois vetores na tela, simultaneamente, em duas colunas (um em cada coluna), uma posição por linha.

const vetor1 = []
const vetorx5 = []

//vet1 = 2,3,4
//vetx1 = 10,15,20

for(let i =0; i < 10; i++){
    vetor1[i] = Math.floor(Math.random()*10)
    vetorx5[i] = vetor1[i] * 5 
    
}
console.log("Vetor digitado:"+vetor1)
console.log("Vetor resultante:"+vetorx5)

