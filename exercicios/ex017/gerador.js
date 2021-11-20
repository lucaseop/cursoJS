let res = window.document.querySelector('div#final')
var ale = 0
function clique(){
    ale = Math.floor(Math.random() * 100 +1)
    res.innerHTML += `<p>Acabei de pensar no número <mark>${ale}</mark>!</p>`
}
function limpar(){
    ale = 0
    res.innerHTML = ``
}