import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-menus-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './menus-page.component.html',
  styleUrls: ['./menus-page.component.css']
})
export class MenusPageComponent {
  searchQuery = '';

  constructor(private router: Router) {}

  onSearch() {
    // lógica para buscar menús
    console.log('Buscar:', this.searchQuery);
  }

  logout() {
    // lógica para cerrar sesión
    console.log('Cerrar sesión');
  }

  goToRecommendation() {
    this.router.navigate(['/Recomendaciones']);
  }
}