function calcula(){
    let res = document.querySelector('div#resultado')
    let agora = new Date
    res.innerHTML = `<p>O que recebi do sistema foi <mark>${agora}</mark></p>`
}