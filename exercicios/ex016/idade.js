function calcular(){
    let idade = Number(window.prompt('Em que ano você nasceu?'))
    var data = new Date()
    var ano = data.getFullYear()
    birt = ano - idade
    let res = window.document.querySelector('div#final')
    res.innerHTML = `<p>você nasceu em ${idade} e tem ${birt} anos</p>`
}