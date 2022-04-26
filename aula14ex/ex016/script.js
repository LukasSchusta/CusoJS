
function clique(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    let n1 = Number(inicio.value)
    let n2 = Number(fim.value)
    let n3 = Number(passo.value)
    res.innerHTML = ''

    if(n1 < 0 || n2 < 0 || n3 <= 0){
        res.innerHTML = 'Apenas números positivos são aceitos!'
    }else if(n2 > 3000){
        res.innerHTML = 'Numero Deveras grande meu caro'
    }else if(n1 > n2){
        for(let c = n1; c >= n2; c -= n3){
            res.innerHTML += `${c} 👉 `
        }
            
    }
    else{
        for(let c = n1; c <= n2; c += n3){
            res.innerHTML += `${c} 👉 `
            
        }
        res.innerHTML += '🏁'
        
    }
}
