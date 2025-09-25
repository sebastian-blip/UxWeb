import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,               // <-- Asegúrate de poner esto si es standalone
  imports: [RouterOutlet, HeaderComponent], // <-- Agrega MenuComponent aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('uxweb');
}