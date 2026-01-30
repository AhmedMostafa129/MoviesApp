import { Component, signal, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth';
import { ToastService } from '../services/toast.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  private auth = inject(AuthService);
  private router = inject(Router);
  private toastService = inject(ToastService);
  themeService = inject(ThemeService);

  // ✅ signals مباشرة من AuthService
  user = this.auth.user;
  isLoggedIn = this.auth.loggedIn;
  isDarkMode = this.themeService.isDarkMode;

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  logout() {
    this.auth.logout();
    this.toastService.show('Logged out successfully', 'info');
  }

  // ✅ دالة التنقل للـWatchlist
  goToWatchlist() {
    if (!this.auth.isLoggedIn()) {
      this.toastService.show('⚠️ You must log in first to access your Watchlist.', 'info');
      this.router.navigate(['/login']);
      return;
    }
    this.router.navigate(['/watchlist']);
  }

  shouldShowBackBtn(): boolean {
    return this.router.url.includes('/mvDetails');
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
