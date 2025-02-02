import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { InserirTarefaComponent } from '../inserir-tarefa/inserir-tarefa.component';
import { ListaTarefaComponent } from '../lista-tarefa/lista-tarefa.component';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-crud-tarefas',
  imports: [
    InserirTarefaComponent,
    ListaTarefaComponent,
    FormsModule,
    PanelModule,
    DividerModule
  ],
  templateUrl: './crud-tarefas.component.html',
  styleUrl: './crud-tarefas.component.css'
})
export class CrudTarefasComponent {
  tarefas: Tarefa[] = [];

  adicionarTarefa(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
  }

  removerTarefa(tarefa: Tarefa){
    this.tarefas = this.tarefas.filter(tarefaInterna => tarefaInterna !== tarefa);
  }
}
