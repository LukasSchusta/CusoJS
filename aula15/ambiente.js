let num = [5, 8, 4, 'c', 'b', 'a',]
num.sort()
num.push(7) // Coloca um item no final do array
console.log(`O vetor tem ${num.length} posições sendo ${num}`);
let pos = num.indexOf(9)
if(num.indexOf(3) == -1){
    console.log('Não existe');
}

