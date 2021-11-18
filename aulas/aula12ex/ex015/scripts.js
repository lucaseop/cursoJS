function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO, verifique os dados')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <=20){
                //criança
                img.setAttribute('src','imagens/pivete.png')
            }
            else if(idade >20 && idade <40 ){
                //adulto
                img.setAttribute('src','imagens/mascarado.png')
            }
            else{
                //velho
                img.setAttribute('src','imagens/veio.png')
            } 
        }
        else{
            genero = 'Mulher'
            if(idade >=0 && idade <=20){
                //criança
                img.setAttribute('src','imagens/piveta.png')
            }
            else if(idade >20 && idade <40 ){
                //adulto
                img.setAttribute('src','imagens/rapariga.png')
            }
            else{
                //velho
                img.setAttribute('src','imagens/veio.png')
            } 
        }
        res.innerHTML = `Detectamos que é um ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}