import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenusPageComponent } from './pages/menus-page/menus-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menus', component: MenusPageComponent },
  // ... otras rutas
];