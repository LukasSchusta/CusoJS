    let numero = document.getElementById('num')
    let res = document.getElementById('res')
function clique(){
    
    let num = Number(numero.value)
    if(numero.value.length == 0){
        alert('Digite um número')
    }else{
        res.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let calc = c * num
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text += `${c}x${num} = ${calc}`
            res.appendChild(item)
        }
    }
}
function limpar(){
    document.getElementById('num').value=''
    res.innerHTML = ''
}