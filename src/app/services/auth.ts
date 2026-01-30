import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from './wishlist.service';
import { ToastService } from './toast.service';

export interface User {
  email: string;
  name: string;
  password: string;
  phone?: string;
  address?: string;
  bio?: string;
  profileImage?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  private wishlistService = inject(WishlistService);
  private toastService = inject(ToastService);

  user = signal<User | null>(null);
  loggedIn = signal(false);

  constructor() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.user.set(JSON.parse(storedUser));
      this.loggedIn.set(true);
    }
  }

  login(email: string, password: string): boolean {
    try {
      const registered = localStorage.getItem('registeredUsers');
      if (!registered) return false;

      const users: User[] = JSON.parse(registered);
      if (!Array.isArray(users)) return false;

      const found = users.find(u => u.email === email && u.password === password);

      if (found) {
        this.user.set(found);
        this.loggedIn.set(true);
        localStorage.setItem('currentUser', JSON.stringify(found));
        this.toastService.show('Welcome back, ' + found.name + ' 👋', 'success');
        return true;
      }

      this.loggedIn.set(false);
      this.user.set(null);
      return false;
    } catch (err) {
      console.error('Login error:', err);
      this.loggedIn.set(false);
      this.user.set(null);
      return false;
    }
  }

  register(email: string, name: string, password: string): void {
    const newUser: User = { email, name, password };

    const registered = localStorage.getItem('registeredUsers');
    let users: User[] = registered ? JSON.parse(registered) : [];

    const exists = users.find(u => u.email === email);
    if (exists) throw new Error('Email already registered');

    users.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    this.user.set(newUser);
    this.loggedIn.set(true);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.user.set(null);
    this.loggedIn.set(false);

    this.wishlistService.clearWishlist();

    this.router.navigate(['/home']);
  }

  updateUser(user: User): void {
    this.user.set(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }


  isLoggedIn(): boolean {
    return this.loggedIn();
  }

  getUser(): User | null {
    return this.user();
  }

  getAllUsers(): User[] {
    const registered = localStorage.getItem('registeredUsers');
    return registered ? JSON.parse(registered) : [];
  }
}
