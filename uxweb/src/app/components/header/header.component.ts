import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, FormsModule], 
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor() {}

  onSearch() {
    console.log('Search Query:', this.searchQuery);
    // Implementa la funcionalidad de búsqueda aquí
  }

  // Métodos de navegación
  navigateTo(page: string) {
    console.log('Navigating to:', page);
    // Implementa la funcionalidad de navegación aquí
  }

  // Métodos de perfil de usuario
  openProfile() {
    console.log('Opening user profile');
    // Implementa la funcionalidad de perfil aquí
  }

  // MÉTODO QUE SOLUCIONA TU ERROR:
  logout() {
    console.log('Cerrar sesión');
    // Aquí puedes poner la lógica para cerrar sesión
  }
}