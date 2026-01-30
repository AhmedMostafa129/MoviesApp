import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';  // <-- هنا ضيف NgIf
import { AuthService } from '../../services/auth';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, NgIf, NgClass], // <-- ضيف NgIf هنا
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);
  private toastService = inject(ToastService);

  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;
  errorMessage = '';

  constructor() {
    const remembered = localStorage.getItem('rememberedEmail');
    if (remembered) {
      this.email = remembered;
      this.rememberMe = true;
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter email and password.';
      this.toastService.show(this.errorMessage, 'error');
      return;
    }

    const ok = this.auth.login(this.email.trim(), this.password.trim());

    if (ok === true) {
      if (this.rememberMe) {
        localStorage.setItem('rememberedEmail', this.email.trim());
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid email or password.';
      this.toastService.show('❌ Invalid email or password.', 'error');
    }
  }

}
