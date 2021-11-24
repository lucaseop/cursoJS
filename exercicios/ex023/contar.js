function contar(){
    let res = window.document.querySelector('div#final')
    res.innerHTML = `<h2>Contando de 1 até 10</h2>`
    for(var c = 1; c <=10 ; c++){
        if(c%2==0){
            res.innerHTML += `${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`

}