import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  authenticated : boolean = false;
  
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authenticated  = this.authService.isAuthenticated();
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
