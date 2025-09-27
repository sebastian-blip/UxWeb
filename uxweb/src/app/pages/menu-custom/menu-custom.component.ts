import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-menu-custom',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './menu-custom.component.html',
  styleUrls: ['./menu-custom.component.css']  
})
export class MenuCustomComponent { }  
