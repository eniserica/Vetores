alert("Digite 0 para sair!")
let numero

do{
    numero = Number (prompt("Digite um número"))

    if (numero === 0 || isNaN(numero)){
        let sair = prompt("Confimar saida")
        if (sair){
            break
        }else{
            continue
        }
    }
    if(numero%2===0){
        document.write(`O número ${numero} é par e seu dobro é ${numero*2}`)
    }else{
        document.write(`O número ${numero} é impar e seu triplo é ${numero*3}`)
    }
    

    alert("Digite 0 para sair")
}while(true);

