let num = [5,2,8,3]
num[3] = 6
num.push(7) //colocar na ultima posição
num.length // tamanho
num.sort() // colocar em ordem crescente

console.log(num)


//for simplificado para javascript

for(let pos in num){
    console.log(num[pos]) //for in
}

num.indexOf(7) //buscar o valor 7 no vetor retorna a posição