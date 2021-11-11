let somatorio = 0
function contar(){
    somatorio ++
    let res = window.document.getElementById('resultadofinal')
    res.innerHTML = `<p>O contador está com <mark>${somatorio}</mark> cliques</p>`
}
function zerar(){
    somatorio = 0
    let res = window.document.querySelector('section#resultadofinal')
    res.innerHTML = `<p>O contador está com <mark>${somatorio}</mark> cliques</p>`
}