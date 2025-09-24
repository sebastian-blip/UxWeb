import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { ProgressMenuComponent } from '../../components/progress-menu/progress-menu.component';
import { PreferencesBlockComponent } from '../../components/preferences-block/preferences-block.component';
import { AiMenuComponent } from '../../components/ai-menu/ai-menu.component';
import { NutriCheckBlockComponent } from '../../components/nutri-check-block/nutri-check-block.component';
import { SnackSidebarComponent } from '../../components/snack-sidebar/snack-sidebar.component';
import { MainActionsComponent } from '../../components/main-actions/main-actions.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    PreferencesBlockComponent,
    AiMenuComponent,
    NutriCheckBlockComponent,
    SnackSidebarComponent,
    MainActionsComponent,
    HeaderComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {}