import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent 
  ],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor(private router: Router) {} 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToNext() {
    this.router.navigate(['/home']);  
  }

}
