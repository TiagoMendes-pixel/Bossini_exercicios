function demorada (){
    const atualMaisDoisSegundos = new Date().getTime() + 2000
    while (new Date().getTime() <= atualMaisDoisSegundos);
    const d = 8 + 4 
    return d 
}

const a = 2 + 3 
const b = 5 + 9 
const d = demorada()

const e = 2 + a + b 
console.log (e)