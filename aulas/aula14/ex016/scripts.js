function contar(){
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    let res = window.document.querySelector('div#final')

    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        window.alert('ERRO')
    }
    else{
        res.innerHTML = `<p>Contando: </p>\n`
        let i = Number(inicio.value) //importante converter para number
        let f = Number(fim.value)
        let p = Number(passo.value)
        for(c = i ; c <= f ; c += p){ //criar variavel de contagem
        res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}` //emoji \u{}
    }  
}