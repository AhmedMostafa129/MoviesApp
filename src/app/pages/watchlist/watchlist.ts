import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlist.service';
import { Router, RouterLink } from '@angular/router';
import { Movies } from '../../modals/movies';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './watchlist.html',
  styleUrls: ['./watchlist.css']
})
export class Watchlist {
  private wishlistService = inject(WishlistService);
  private router = inject(Router);

  movies: Movies[] = [];

  ngOnInit() {
    this.loadWishlist();
  }

  loadWishlist() {
    this.movies = this.wishlistService.getWishlist();
  }

  removeMovie(movie: Movies) {
    this.wishlistService.toggleMovie(movie);
    this.loadWishlist();
  }

  goToDetails(id: number) {
    this.router.navigate(['/mvDetails', id]);
  }
}
