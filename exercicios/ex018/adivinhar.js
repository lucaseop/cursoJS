var numero = Math.floor(Math.random() * 100 + 1)
let res = window.document.querySelector('div#final')
//res.innerHTML += `${numero}`
function adivinhar(){
    var palpite =  Number(window.prompt('Qual é o seu palpite?'))
    if(palpite < numero){
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MAIOR!</strong></p>`
    }
    else if(palpite > numero){
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MENOR!</strong></p>`
    }
    else{
        res.innerHTML += `<p><mark>PARABÉNS!</mark> Você acertou! Eu tinha sorteado o valor ${numero}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }

}