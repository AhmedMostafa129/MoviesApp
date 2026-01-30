import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, NgClass],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  private toastService = inject(ToastService);

  name = '';
  email = '';
  phone = '';
  address = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(private router: Router) { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.toastService.show('Passwords do not match!', 'error');
      return;
    }

    const newUser = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      address: this.address,
      password: this.password,
      profileImage: null // Initialize with null
    };

    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    const exists = existingUsers.find((u: any) => u.email === this.email);
    if (exists) {
      this.toastService.show('Email already registered!', 'error');
      return;
    }

    existingUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

    localStorage.setItem('currentUser', JSON.stringify(newUser));

    this.toastService.show('Registration successful! Welcome.', 'success');
    this.router.navigate(['/account-details']);
  }

}
