export class Tarefa{
    titulo: string;
    prioridade: number;
    concluida: boolean;
    
    constructor(titulo: string, prioridade: number) {
        this.titulo = titulo
        this.prioridade = prioridade
        this.concluida = false
    }
}