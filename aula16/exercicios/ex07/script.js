
let array = new Array()
function teste(n){
    for(let i = 0; i < array.length ; i++){
        if(array[i] == n){
            return true
        }


    }
    return false
}
function clique(){
    number_input.type = "reset"
    let res = document.getElementById('res')
    let number_input = document.getElementById('number-input')
    let number_input_number = Number(number_input.value)
    if(number_input.value.length <= 0){
        alert('Nenhum valor informado')
    }else{
        if(number_input_number > 100){
            alert('Valor acima do permitido')
        }else if(number_input_number < 0){
            alert('Valores negativos não são aceitos!')
        }else if(teste(number_input_number)){
            alert('batata')
        }
        else{
            let item = document.createElement('option')
            array.push(number_input_number)
            item.text = `Valor ${number_input_number} adicionado`
            res.appendChild(item)
        }
            
        
    }
}
function finalizar(){
    
    let campo = document.getElementById('campo')
    campo.innerHTML += `Ao todo, temos ${array.length} cadastrados <br>`
    var maior = 0;
    
    campo.innerHTML += `O maior valor informado foi ${Math.max(...array)}<br>`
    campo.innerHTML += `O menor valor informado foi ${Math.min(...array)}<br>`
    let soma = 0
    for(let i = 0; i < array.length; i++){
        soma  += array[i]
    }
    campo.innerHTML += `Somando todos os valores, temos ${soma}<br>`
    campo.innerHTML += `A média dos valores digitados é ${soma / array.length}<br>`
}