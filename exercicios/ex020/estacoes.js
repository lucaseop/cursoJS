function clique(){
    let mes = window.prompt('Digite o mês em extenso (ex:Setembro)')
    let res = window.document.querySelector('div#resultado')
    if(mes == 'Abril' || mes == 'Maio' || mes == 'Junho'){
        //Outono
        res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos no <strong><mark>OUTONO</mark></strong>.</p>`
    }
    else if (mes == 'Julho' || mes == 'Agosto' || mes == 'Setembro'){
        //Inverno
        res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos no <strong><mark>INVERNO</mark></strong>.</p>`
    }
    else if (mes == 'Outubro' || mes == 'Novembro' || mes == 'Dezembro'){
        //Primavera
        res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na <strong><mark>PRIMAVERA</mark></strong>.</p>`
    }
    else if (mes == 'Janeiro' || mes == 'Fevereiro' || mes == 'Março'){
        //Verão
        res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos no <strong><mark>VERÃO</mark></strong>.</p>`
    }
    else{
        res.innerHTML = `<p>O mês não é válido</p>`
    }
}
