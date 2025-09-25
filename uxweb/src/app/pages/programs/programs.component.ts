import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
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
    { img: 'assets/images/restriccion-leche.jpg', alt: 'Leche' },
    { img: 'assets/images/restriccion-almendra.jpg', alt: 'Almendra' },
    { img: 'assets/images/restriccion-mani.jpg', alt: 'Maní' },
    { img: 'assets/images/restriccion-fresa.jpg', alt: 'Fresa' },
  ];

  goToMenuRecommendation() {
    // Aquí va la navegación a /Recomendaciones
    // (Ver instrucciones anteriores para Router)
  }
}