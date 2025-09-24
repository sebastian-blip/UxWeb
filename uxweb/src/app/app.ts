import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component'; // <-- Importa tu componente

@Component({
  selector: 'app-root',
  standalone: true,               // <-- Asegúrate de poner esto si es standalone
  imports: [RouterOutlet, MenuComponent], // <-- Agrega MenuComponent aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('uxweb');
}