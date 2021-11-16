function calcular(){
    let nome = window.prompt('Digite um número')
    let res = window.document.querySelector('div#resultados')
    if (nome % 2 == 0){
        res.innerHTML = `<p>O número ${nome} que foi digitado é <strong>PAR</strong></p>`
    }
    else{
        res.innerHTML = `<p>O número ${nome} que foi digitado é <strong>IMPAR</strong></p>`
    }
}