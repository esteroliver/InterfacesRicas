class Pagamento{
    _valor : number
    constructor(valor : number) {
        this._valor = valor        
    }
    get valor() : number{
        return this._valor
    }
    set valor(valor : number){
        this._valor = valor
    }
    realizarPagamento() : void{
        console.log("Realizando pagamento!")
    }
    valorPagamento() : void{
        console.log("Valor do pagamento: ", this._valor)
    }
    static calcularDesconto(valor : number, desconto : number){
        return valor - (valor * desconto / 100)
    }
}

class CartaoCredito extends Pagamento{
    _validade : string
    _parcelas : number
    constructor(valor : number, validade : string, parcelas : number){
        super(valor)
        this._validade = validade
        this._parcelas = parcelas
    }
    get validade() : string{
        return this._validade
    }
    set validade(validade : string){
        this._validade = validade
    }
    get parcelas() : number{
        return this._parcelas
    }
    set parcelas(parcelas : number){
        this._parcelas = parcelas
    }
    validadeCartao() : void{
        console.log("Validade do cartão: ", this._validade)
    }
    quantidadeParcelas() : number{
        console.log("Quantidade de parcelas: ", this._parcelas)
        return this._parcelas
    }
}

class Boleto extends Pagamento{
    _validade : string
    constructor(valor: number, validade : string){
        super(valor)
        this._validade = validade
    }
    get validade() : string{
        return this._validade
    }
    set validade(validade : string){
        this._validade = validade
    }
    validadeBoleto() : void{
        console.log("Validade do boleto: ", this._validade)
    }
}

export const pag = new Pagamento(100);
export const cart = new CartaoCredito(100, "30/01/2025", 2)
export const bol = new Boleto(100, "30/01/2025")