export function exp01(numeros: number[]) : number[] {
    let numeros_exp = numeros
    for (let i = 0; i < numeros.length; i++){
        numeros_exp[i] = numeros[i] * numeros[i]
        console.log(numeros_exp[i])
    }
    return numeros_exp
}

export function exp02(numeros: number[]) : number[] {
    let numeros_exp: number[] = []
    let x
    numeros.forEach(n => {
        x = n * n
        numeros_exp.push(x)
        console.log(x)
    })
    return numeros_exp
}