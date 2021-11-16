function calcular(){
    var num = Number(window.prompt('Digite um número:'))
    var num2 = Number(window.prompt('Digite um número:'))
    let res = window.document.querySelector('div#resultados')
    if(num>num2){
        res.innerHTML = `<p>Analisando os valores <mark>${num}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${num}</strong></p>`
    }else if (num2>num) {
        res.innerHTML = `<p>Analisando os valores <mark>${num}</mark> e <mark>${num2}</mark>, o maior valor é <strong>${num2}</strong></p>`
    } else {
        res.innerHTML = `<p>Analisando os valores <mark>${num}</mark> e <mark>${num2}</mark>, os dois são <strong>iguais</strong></p>`
    }
}