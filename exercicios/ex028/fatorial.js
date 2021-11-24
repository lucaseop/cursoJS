function fatorial(){
    let num = window.document.getElementById('num')
    let res = window.document.querySelector('div#final')
    let n = Number(num.value)
    let contador = 1

    res.innerHTML = `<h2>Calculando ${n}!</h2>`

    for(var c = n ; c > 0 ; c--){
        if(c==1){
            res.innerHTML += `${c} = `
        contador *= c
        }
        else{
           res.innerHTML += `${c} x `
        contador *= c 
        }
    }
    res.innerHTML += `<strong>${contador.toLocaleString('pt-BR')}</strong>`
}