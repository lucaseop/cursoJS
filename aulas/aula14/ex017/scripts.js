function tabuada(){
    let num = document.getElementById('txtnumero')
    let tab = document.getElementById('seltab')
    if(num.value.lenght == 0 ){
        window.alert('ERRO')
    }
    else{
        let n = Number(num.value)
        tab.innerHTML = ``
        for(c = 0 ; c<11 ; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)        
        }
    }
    
}