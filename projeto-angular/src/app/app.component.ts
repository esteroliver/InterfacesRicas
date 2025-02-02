import { Component } from '@angular/core';
import { CrudTarefasComponent } from './components/crud-tarefas/crud-tarefas.component';
import { InserirTarefaComponent } from './components/inserir-tarefa/inserir-tarefa.component';

@Component({
  selector: 'app-root',
  imports: [
    CrudTarefasComponent,
    InserirTarefaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
