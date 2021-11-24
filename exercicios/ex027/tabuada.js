function tabuada(){
    let num = document.getElementById('num')
    let res = document.querySelector('div#final')
    let n = Number(num.value)

    res.innerHTML = `<h2>Tabuada de ${n}</h2>`

    for(var c = 1 ; c < 11 ; c++){
        res.innerHTML += `${n} x ${c} = <strong>${n*c}</strong><br>`
    }

}