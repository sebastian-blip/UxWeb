import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenusPageComponent } from './pages/menus-page/menus-page.component';
import { MenuCreatorComponent } from './pages/menu-creator/menu-creator.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { MenuCustomComponent } from './pages/menu-custom/menu-custom.component.js';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';

export const routes: Routes = [
  { path: 'menus', component: MenusPageComponent },
  { path: 'Recomendaciones', component: MenuCreatorComponent}, 
  { path: 'Programas', component: ProgramsComponent},
  { path: 'home', component: HomeComponent},
  { path: 'menucustom', component: MenuCustomComponent},
  { path: 'onboarding', component: OnboardingComponent}
  // ... otras rutas
];