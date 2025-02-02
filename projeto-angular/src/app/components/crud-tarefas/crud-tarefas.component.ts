import { Component } from '@angular/core';
import { Tarefa } from '../tarefa';
import { InserirTarefaComponent } from '../inserir-tarefa/inserir-tarefa.component';
import { ListaTarefaComponent } from '../lista-tarefa/lista-tarefa.component';

@Component({
  selector: 'app-crud-tarefas',
  imports: [
    InserirTarefaComponent,
    ListaTarefaComponent
  ],
  templateUrl: './crud-tarefas.component.html',
  styleUrl: './crud-tarefas.component.css'
})
export class CrudTarefasComponent {
  tarefas: Tarefa[] = [];

  adicionarTarefa(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
  }
}
