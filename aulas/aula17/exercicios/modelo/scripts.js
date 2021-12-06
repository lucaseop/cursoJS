let adi = []
let tab = document.getElementById('tabela')
tab.innerHTML = ``
let final = document.querySelector('div#resultado')


function adicionar(){   
    final.innerHTML = ``
    let num = document.getElementById('txtnum')
    let n = Number(num.value)
    let ver = adi.indexOf(n)

    if (n<1 || n>100){
        window.alert('ERRO! valor não está entre 1 e 100')
    }
     else if(ver != -1){
         window.alert('ERRO! valor já adicionado')
     }
    else{
        adi.push(n)
        let item = document.createElement('option')
        item.text += `Valor ${n} adicionado`
        item.value = `tab${n}`
        tab.appendChild(item)   
        //window.alert(adi)
    }
}
function finalizar(){
    var tamanho = adi.length
    adi.sort()
    
    var total = 0

    for (let pos in adi){
        total = total + adi[pos]
    }

    final.innerHTML = `<p>Ao todo, temos ${tamanho} números cadastrados</p>`
    final.innerHTML += `<p>O maior valor informado foi ${adi[tamanho-1]}.</p>`
    final.innerHTML += `<p>O menor valor informado foi ${adi[0]}.</p>`
    final.innerHTML += `<p>Somando todos os valores temos ${total}</p>`
    final.innerHTML += `<p>A média dos valores digitados é ${total/tamanho}</p>`
}