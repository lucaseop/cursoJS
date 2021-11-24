function clique(){
    var valor1 = Number(window.prompt('Primeiro valor:'))
    var valor2 = Number(window.prompt('Segundo valor:'))
    var escolha = Number(window.prompt(`Valores informados: ${valor1} e ${valor2}\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`))
    let resultado = window.document.querySelector('div#final')
    if(valor1 == 0 || valor2 == 0 || 1>escolha>4){
        resultado.innerHTML = `<p>OPÇÃO INVÁLIDA! Você fez algo errado!</p>`
    }
    else{
        switch(escolha){
            case 1:
                resultado.innerHTML = `<h2>Calculando</h2>`
                resultado.innerHTML += `<p>${valor1} + ${valor2} = <strong>${valor1+valor2}</strong></p>`
                break;
            case 2:
                resultado.innerHTML = `<h2>Calculando</h2>`
                resultado.innerHTML += `<p>${valor1} - ${valor2} = <strong>${valor1-valor2}</strong></p>`
                break;
            case 3:
                resultado.innerHTML = `<h2>Calculando</h2>`
                resultado.innerHTML += `<p>${valor1} x ${valor2} = <strong>${valor1*valor2}</strong></p>`
                break;
            case 4:
            resultado.innerHTML = `<h2>Calculando</h2>`
            resultado.innerHTML += `<p>${valor1} / ${valor2} = <strong>${valor1/valor2}</strong></p>`
            break;
            }
    }
}