export function ordenar(palavras: string[]) : string[]{
    let palavras_ordenadas = palavras.sort()
    palavras_ordenadas.forEach(p => console.log(p))
    return palavras_ordenadas
}