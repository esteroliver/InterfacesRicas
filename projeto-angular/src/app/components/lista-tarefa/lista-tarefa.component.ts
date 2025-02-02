import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-lista-tarefa',
  imports: [
    ButtonModule,
    FormsModule,
    TableModule,
    TagModule
  ],
  templateUrl: './lista-tarefa.component.html',
})

export class ListaTarefaComponent {
  @Input() lista_tarefas: Array<Tarefa> = [];

  @Output() remover_tarefa = new EventEmitter<Tarefa>();

  @Output() concluir_tarefa = new EventEmitter<Tarefa>();

  removerTarefa(tarefa: Tarefa){
    this.remover_tarefa.emit(tarefa);
  }

  concluirTarefa(tarefa: Tarefa){
    this.concluir_tarefa.emit(tarefa);
  }

}
