let array = [];
let troca
/* mostra na ordem inscrita/*
for (let i = 1; i<= 10; i++){
    array[i] = parseInt(prompt(`Digite o ${i}º número`))
}
document.write(array)
/*ordem decrescente/*
do{
    troca = false; 
    for(let i = array.length;i>=0; i--){
        if (array [i] > array[i-1]){
            let temp = array[i]
            array[i] = array[i-1];
            array[i-1] = temp;
            troca = true;
        }
    }
}while(troca);

document.write(array);