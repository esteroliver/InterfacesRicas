import { Component } from '@angular/core';
import { TesteComponent } from './teste/teste.component';

@Component({
  selector: 'app-root',
  imports: [TesteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
