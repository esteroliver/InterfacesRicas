import { Component } from '@angular/core';
import { InserirTarefaComponent } from './components/inserir-tarefa/inserir-tarefa.component';

@Component({
  selector: 'app-root',
  imports: [
    InserirTarefaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
