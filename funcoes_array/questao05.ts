export function pares(numeros : number[]) : number[]{
    let numeros_pares = numeros.filter(n => n%2 == 0)
    console.log(numeros_pares)
    return numeros_pares
}