
function funcao(){
    let data = new Date()
    let year = data.getFullYear()
    let idade_box = document.getElementById('idade_box')
    let res = document.getElementById('insert')
    let idade_trans = idade_box.value
    let calc = year - idade_trans
    if(idade_box.value == 0  || idade_box.value > year){
        res.innerHTML = 'Dados inválidos, tente novamente'
    }else{
        let radio = document.getElementsByName('radio_button')
        let genero = ''
        var img = document.createElement('img')
        if(radio[0].checked){
            genero = 'homem'
            img.setAttribute('src','homemFoda.jpg')
        }else if(radio[1].checked){
            genero = 'mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${calc} anos.`
        res.appendChild(img)
    }
}