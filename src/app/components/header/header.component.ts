import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor() {}

  onSearch() {
    console.log('Search Query:', this.searchQuery);
    // Implement search functionality here
  }

  // Navigation methods can be added here
  navigateTo(page: string) {
    console.log('Navigating to:', page);
    // Implement navigation functionality here
  }

  // User profile methods can be added here
  openProfile() {
    console.log('Opening user profile');
    // Implement user profile functionality here
  }
}