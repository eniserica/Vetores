let quantidade; n = []; 

quantidade = Number(prompt("Digite a quantidade de números que deseja para essa sequencia"))

for(let i = 0; i< quantidade; i++){
    n[i]=Number(prompt("Digite o número"))
}
document.write(`${n}`)
for (let i = n.length - 1 ; i >= 0; i --){
    document.write(`${n[i]}`)
}
    