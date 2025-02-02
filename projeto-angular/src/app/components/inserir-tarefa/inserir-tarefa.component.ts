import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-inserir-tarefa',
  imports: [
    InputTextModule,
    FloatLabelModule,
    ButtonModule
  ],
  templateUrl: './inserir-tarefa.component.html',
})

export class InserirTarefaComponent {
  nova_tarefa = new Tarefa("", 1);
}
