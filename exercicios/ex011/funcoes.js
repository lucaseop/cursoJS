function calcular(){
    let nome = window.prompt('Qual o nome do aluno?')
    var nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    var nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}? `))
    let res = window.document.querySelector('div#resultado')
    media = (nota1 + nota2)/2
    res.innerHTML = `<p>Calculando a média de <mark>${nome}</mark></p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media.toFixed(2)}</mark>.</p>`
    
    if(media<6){
        res.innerHTML += `<p>A mensagem que temos é: <strong><span style="color: red">Estude um pouco mais!</span></strong></p>`
    }
    else{
        res.innerHTML += `<p>A mensagem que temos é: <strong><span style="color: red">Parabéns!</span></strong></p>`
    }
}