interface Area{
    area(): number;
}

class Retangulo implements Area{
    comprimento: number
    largura: number

    area(){
        return this.comprimento * this.largura
    }
}

class Triangulo{
    base: number
    altura: number

    area(){
        return (this.base * this.altura)/2
    }
}