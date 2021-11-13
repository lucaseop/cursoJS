let res = window.document.querySelector('section#resultado')
function acao(){
    res.innerHTML += `<p>Clicou no primeiro botão</p>`
}
function acao2(){
    res.innerHTML += `<p>Clicou no segundo botão</p>`
}
function acao3(){
    res.innerHTML += `<p>Clicou no terceiro botão</p>`
}
function acao4(){
    res.innerHTML += `<p>Clicou no quarto botão</p>`
}
function zerar(){
    res.innerHTML = `<p>Aqui vou registrar suas ações com os botôes acima.</p>`
}