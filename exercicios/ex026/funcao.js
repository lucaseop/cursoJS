function contar(){
    let res = window.document.querySelector('div#final')
    let ini = window.document.getElementById('txtinicial')
    let fin = window.document.getElementById('txtfinal')
    let i = Number(ini.value)
    let f = Number(fin.value)
    res.innerHTML += `<h2>Contando de ${i} até ${f}</h2>`
    if(f>i){
        for(var c = i ; c <= f ; c++){
            res.innerHTML += `${c} \u{1f449}`
        }
        res.innerHTML += `\u{1f3c1}`
    }
     else if(i>f){
        for(var d = i ; d >= f ; d--){
            res.innerHTML += `${d} \u{1f449}`
            }
        res.innerHTML += `\u{1f3c1}`
        
    } else {
        res.innerHTML += `Os numeros são iguais`
    }
   
   
   
   
   
   
   
   
    

    
}