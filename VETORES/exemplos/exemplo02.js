let quantidade; numeros = []

/*validação */
do{
    quantidade = Number (prompt ("Digite quantos números você quer para essa sequencia: "))
    if(quantidade < 0 || isNaN(quantidade)){
            alert("Numeros invalido")
    }
}while (n < 0 || isNaN(quantidade))

/*variavel para a cada numero da sequencia*/
for (let i = 0; i < quantidade; i ++){
    numeros[i] = Number(prompt("Digite o número"))
} 

/*document em ordem normal*/
document.write(`Vetor: ${numeros}`)

/*a numeros.length poderia ser quantidade-1*/
/*ordem ao contrario*/
for (let i = numeros.length - 1; i >= 0; i--){
    document.write(`<p>${numeros[i]}</p>`)

}





