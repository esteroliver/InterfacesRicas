import { Component } from '@angular/core';
import { CrudTarefasComponent } from './components/crud-tarefas/crud-tarefas.component';

@Component({
  selector: 'app-root',
  imports: [
    CrudTarefasComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
