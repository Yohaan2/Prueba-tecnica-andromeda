import { Component } from '@angular/core';
import { FormService } from '../service/form/form.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LayoutComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  messageCreated$!: string;
  form!: FormGroup;

  constructor(private formService: FormService, public fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', [ Validators.required]],
      lastName: ['', [ Validators.required]],
      phone: ['', [ Validators.required]]
    })
  }
  ngOnInit() { }

  saveData() {
    this.formService.registerClient({name: this.form.value.name, lastName: this.form.value.lastName, phone: this.form.value.phone}).subscribe({
      next: response => {
        this.messageCreated$ = response.message;
        this.form.reset()
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('Message sent successfully');
      }
    })
  }

  goToDashboard() {
    this.router.navigate(['/dashboard'])
  }
}
