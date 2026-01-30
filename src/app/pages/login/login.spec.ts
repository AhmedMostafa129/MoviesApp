import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;
  errorMessage = '';

  constructor() {
    // لو في إيميل محفوظ للـ "Remember me" نرجه
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
      return;
    }

    const ok = this.auth.login(this.email.trim(), this.password);

    if (ok) {
      // Remember me handling
      if (this.rememberMe) {
        localStorage.setItem('rememberedEmail', this.email.trim());
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      // Redirect to account details or homepage
      this.router.navigate(['/account-details']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
