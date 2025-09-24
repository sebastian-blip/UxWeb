import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ai-menu',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './ai-menu.component.html',
  styleUrls: ['./ai-menu.component.scss']
})
export class AiMenuComponent {
  days = [
    { name: 'Lunes', foodImg: '/assets/images/food1.png', food: 'Comida' },
    { name: 'Martes', foodImg: '/assets/images/food2.png', food: 'Comida' },
    { name: 'Miércoles', foodImg: '/assets/images/food3.png', food: 'Comida' },
    { name: 'Jueves', foodImg: '/assets/images/food4.png', food: 'Comida' },
    { name: 'Viernes', foodImg: '/assets/images/food5.png', food: 'Comida' },
  ];
}