import { Injectable, signal } from '@angular/core';
import { Movies } from '../modals/movies';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist = signal<Movies[]>([]);

  constructor() {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
      this.wishlist.set(JSON.parse(saved));
    }
  }

  getWishlist(): Movies[] {
    return this.wishlist();
  }

  isInWishlist(movieId: number): boolean {
    return this.wishlist().some(m => m.id === movieId);
  }

  toggleMovie(movie: Movies): void {
    const current = this.wishlist();
    const exists = current.some(m => m.id === movie.id);

    let updated;
    if (exists) {
      updated = current.filter(m => m.id !== movie.id);
    } else {
      updated = [...current, movie];
    }

    this.wishlist.set(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  }

  clearWishlist(): void {
    this.wishlist.set([]);
    localStorage.removeItem('wishlist');
  }
}
