function carregar(){
    var msg = document.querySelector('div#msg')
    var foto = document.getElementById('fotododia')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //bom dia
        foto.src = "manha.jpg"
        document.body.style.background = 'blue'
    }
    else if(hora >= 12 && hora < 18){
        //boa tarde
        foto.src = "tarde.jpg"
        document.body.style.background = 'red'
    }
    else{
        //boa noite
        foto.src = "noite.jpg"
        document.body.style.background = 'green'
    }

}

