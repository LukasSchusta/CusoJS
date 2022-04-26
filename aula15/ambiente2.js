let num = [2, 3, 4]
for(let c = 0; c < num.length ; c ++){
    console.log(num[c]);
}
for(let pos in num){ // Maneira "correta" para usar em arrays
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
if(num.indexOf(3) == true){
    console.log('Salve caraii');
}
