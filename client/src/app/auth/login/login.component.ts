import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router){}

  login(){
    this.authService.login({email: this.email, password: this.password}).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.accessToken);
        this.router.navigate(['/dashboard'])
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Login successfully');
      }
      }
    )
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
