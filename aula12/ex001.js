var idade = 18
if(idade < 16){
    console.log('Não vota')
} else if(idade < 18 || idade >= 65 || idade >=16 && idade < 18){
    console.log('Voto opcional');
} else{
    console.log('Voto obrigatório')
}