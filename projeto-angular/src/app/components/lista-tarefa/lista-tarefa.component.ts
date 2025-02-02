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
  tarefas = [
    { titulo: 'Estudar Angular', prioridade: 1, concluida: false },
    { titulo: 'Fazer compras', prioridade: 2, concluida: true },
    { titulo: 'Reunião com a equipe', prioridade: 3, concluida: false },
  ];

  @Input() lista_tarefas: Array<Tarefa> = [];

  @Output() remover_tarefa = new EventEmitter<Tarefa>();

  removerTarefa(tarefa: Tarefa){
    this.remover_tarefa.emit(tarefa);
  }

}
