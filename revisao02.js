 let gabarito = [];
let result = []

/*gabarito certo*/
for (let i = 0; i < 10; i++){
    gabarito[i] = prompt(`Digite as respostas corretas da questão ${i+1}`)
}

for (let i = 0; i < 10; i ++){/*alunos*/
    let tot 
    for (let j = 0; j<3; j++){/*respostas*/
        let resposta = prompt("Digite sua resposta")
        if(resposta== gabarito[j]){
            tot += 1 
        }
    }
}