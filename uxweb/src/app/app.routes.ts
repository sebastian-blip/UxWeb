import { Routes } from '@angular/router';
import { MenusPageComponent } from './pages/menus-page/menus-page.component';
import { MenuCreatorComponent } from './pages/menu-creator/menu-creator.component';
import { ProgramsComponent } from './pages/programs/programs.component';

export const routes: Routes = [
  { path: 'menus', component: MenusPageComponent },
  { path: 'Recomendaciones', component: MenuCreatorComponent}, 
  { path: 'Programas', component: ProgramsComponent}
  // ... otras rutas
];