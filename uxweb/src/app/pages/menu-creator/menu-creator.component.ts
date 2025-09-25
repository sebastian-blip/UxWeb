import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-menu-creator',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './menu-creator.component.html',
  styleUrls: ['./menu-creator.component.css']
})
export class MenuCreatorComponent {
  // Preferencias dummy
  preferences = '';
  nutriCheck = '';

  // Categorías de menú
  categories = [
    { key: 'D', name: 'Desayuno', checked: true },
    { key: 'A', name: 'Almuerzo', checked: false },
    { key: 'C', name: 'Cena', checked: false },
    { key: 'S', name: 'Snack', checked: true },
    { key: 'O', name: 'Otro', checked: false },
  ];

  // Menú generado por IA (dummy data)
  aiMenus = [
    { day: 'Lunes', img: 'assets/images/desayunos/desayuno3.png' },
    { day: 'Martes', img: 'assets/images/almuerzos/almuerzo1.png' },
    { day: 'Miércoles', img: 'assets/images/desayunos/desayuno2.png'},
    { day: 'Jueves', img: 'assets/images/cenas/cena1.png' },
    { day: 'Viernes', img: 'assets/images/almuerzos/almuerzo4.png' }
  ];

  saveMenu() {
    // lógica para guardar
    console.log('Guardando menú...');
  }

  adjustMenu() {
    // lógica para ajustar menú
    console.log('Ajustando menú...');
  }
}