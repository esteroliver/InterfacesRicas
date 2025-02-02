import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-inserir-tarefa',
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    InputNumberModule
  ],
  templateUrl: './inserir-tarefa.component.html',
})

export class InserirTarefaComponent {
  nova_tarefa = new Tarefa("", 1);
}
