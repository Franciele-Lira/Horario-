
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.toLocaleTimeString() //hora com minutos e segundos
//var hora = 21
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
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

