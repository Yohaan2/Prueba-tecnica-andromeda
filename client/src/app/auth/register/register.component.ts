import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form!: FormGroup;

  constructor(private authService: AuthService, private router: Router, public fb: FormBuilder){
    this.form = this.fb.group({
      username: ['', [ Validators.required]],
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(8)]]
    })
  }

  register() {
    this.authService.register({email: this.form.value.email, password: this.form.value.password, username: this.form.value.username}).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.accessToken);
        this.router.navigate(['/dashboard'])
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
