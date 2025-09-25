import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
  todayPrograms = [
    { title: 'Hidratación', img: 'assets/images/placeholder.svg', color: 'blue' },
    { title: 'Desafío ligero', img: 'assets/images/placeholder.svg', color: 'blue' },
    { title: 'Energía fit', img: 'assets/images/placeholder.svg', color: 'blue' },
  ];

  weeklyPrograms = [
    { title: 'Pérdida de peso', img: 'assets/images/placeholder.svg', color: 'red' },
    { title: 'Peso en equilibrio', img: 'assets/images/placeholder.svg', color: 'red' },
    { title: 'Fuerza muscular', img: 'assets/images/placeholder.svg', color: 'red' },
  ];

  restrictions = [
    { img: 'assets/images/alergias/alergias1.png', alt: 'Leche' },
    { img: 'assets/images/alergias/alergias2.png', alt: 'Almendra' },
    { img: 'assets/images/alergias/alergias3.png', alt: 'Maní' },
    { img: 'assets/images/alergias/alergias4.png', alt: 'Fresa' },
  ];

  goToMenuRecommendation() {
    // Aquí va la navegación a /Recomendaciones
    // (Ver instrucciones anteriores para Router)
  }
}