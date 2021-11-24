function contar(){
    let res = window.document.querySelector('div#final')
    let num = window.document.getElementById('txtvalor')
    let n = Number(num.value)
    res.innerHTML += `<h2>Contando de 0 até ${n}</h2>`

    for(var c = 0 ; c <= n ; c++){
        res.innerHTML += `${c} \u{1f449}`
    }
    res.innerHTML += `\u{1f3c1}`
}