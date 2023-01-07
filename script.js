
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var hora_msg = data.toLocaleTimeString()

msg.innerHTML = `Agora são ${hora_msg.substring(0,5)} horas,`
    if (hora >= 1 && hora < 12 ){
    //Bom Dia
    img.src = 'manha.jpg.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <18) {
    //BOA TARDE!
    img.src = 'tarde.jpg.jpg'
    document.body.style.background = '#b9846f'
    
} else {
    //BOA NOITE!
    img.src = 'noite.jpg.jpg'
    document.body.style.background = '#236B8E'

}

}

