var hora1 = new Date()
var agora = hora1.getHours()
var img = document.getElementById('imagemId')
//agora = 18
// Seleciona as fotos e mensagens quando for determinado horário
if (agora >=5 && agora <12){
    horaId.innerHTML = `Agora são ${agora} horas da manhã`
    img.src = 'fotomanha.jpg'
} else if(agora > 12 && agora <17){
    horaId.innerHTML = `Agora são ${agora} horas da tarde`
    img.src = 'fototarde.jpg'
} else if(agora >= 0 && agora < 5){
    horaId.innerHTML = `Agora são ${agora} horas da madrugada`
    img.src = 'fotomadrugada.jpg'
} else if(agora == 17){
    horaId.innerHTML = `${agora} É BOLSONARO OU NÃO EHHH`
    img.src = 'images.jpg'
    document.body.style.backgroundColor = 'green'
} else{
    horaId.innerHTML = `Agora são ${agora} horas da noite`
    img.src = 'fotonoite.jpg'
}