import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email!: string;
  password!: string;
  username!: string;

  constructor(private authService: AuthService, private router: Router){}

  register() {
    this.authService.register({email: this.email, password: this.password, username: this.username}).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.accessToken);
        this.router.navigate(['/dashboard'])
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Registered successfully');
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
