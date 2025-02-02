import { Component, Output, EventEmitter } from '@angular/core';
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

  @Output() tarefa_inserida = new EventEmitter<Tarefa>();

  inserirTarefa(){
    if(this.nova_tarefa.prioridade < 1 || this.nova_tarefa.prioridade > 5){
      alert("A prioridade da tarefa deve ser definida entre 1 e 5!");
      return;
    }
    if(this.nova_tarefa.titulo == ""){
      alert("O título da tarefa não pode ficar vazio!");
      return;
    }

    this.tarefa_inserida.emit(this.nova_tarefa);

    this.nova_tarefa = new Tarefa("", 1);
  }
}
