interface Area{
    area(): number;
}

class Retangulo implements Area{
    _comprimento : number
    _largura : number

    get comprimento() : number{
        return this._comprimento
    }

    get largura() : number{
        return this._largura
    }

    set comprimento(_comprimento : number){
        this._comprimento = _comprimento
    }

    set largura(_largura : number){
        this._largura = _largura
    }

    area(){
        return this._comprimento * this._largura
    }
}

class Triangulo{
    _base : number
    _altura : number

    get base() : number{
        return this._base
    }

    get altura() : number{
        return this._altura
    }

    set base(_base : number){
        this._base = _base
    }

    set altura(_altura: number){
        this._altura = _altura
    }

    area(){
        return (this._base * this._altura)/2
    }
}

export const ret = new Retangulo();

export const tri = new Triangulo();