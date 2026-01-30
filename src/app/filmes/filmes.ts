import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Movies } from '../modals/movies';
import { Category } from '../modals/category';
import { Router } from '@angular/router';
import { Showcatogry } from '../services/showcatogry';
import { MoviesServices } from '../services/movies-services';
import { WishlistService } from '../services/wishlist.service';
import { AuthService } from '../services/auth'; // ✅ أضفنا AuthService
import { NgClass } from '@angular/common';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [NgClass],
  templateUrl: './filmes.html',
  styleUrls: ['./filmes.css'],
})
export class Filmes implements OnChanges {
  private wishlistService = inject(WishlistService);
  private router = inject(Router);
  private _showcatogry = inject(Showcatogry);
  private _moviesServices = inject(MoviesServices);
  private authService = inject(AuthService); // ✅
  private toastService = inject(ToastService);

  movie: Movies[] = [];
  selectmov: Movies[] = [];
  category: Category[] = [];

  @Input() selectedfilmes: number = 0;
  @Input() searchText: string = '';

  ngOnInit() {
    this.movie = this._moviesServices.getAllmovies();
    this.selectmov = this.movie;
    this.category = this._showcatogry.getAllcategory();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedfilmes'] || changes['searchText']) {
      this.selectedMoves();
    }
  }

  getCategoryName(id: number) {
    const cat = this.category.find(c => c.id === id);
    return cat ? cat.name : 'Unknown';
  }

  selectedMoves() {
    let filtered =
      this.selectedfilmes == 0
        ? this.movie
        : this.movie.filter(i => i.categoryId == this.selectedfilmes);

    if (this.searchText && this.searchText.trim() !== '') {
      const searchLower = this.searchText.toLowerCase();
      filtered = filtered.filter(i =>
        i.name.toLowerCase().includes(searchLower)
      );
    }

    this.selectmov = filtered;
  }

  goToDetails(id: number) {
    this.router.navigate(['/mvDetails', id]);
  }

  // 🎬 Open YouTube Trailer
  watchTrailer(movie: Movies) {
    const query = encodeURIComponent(movie.name + ' trailer');
    const url = `https://www.youtube.com/results?search_query=${query}`;
    window.open(url, '_blank');
  }

  // ❤️ إضافة أو إزالة فيلم من Watchlist (مع تحقق من تسجيل الدخول)
  toggleWishlist(movie: Movies) {
    if (!this.authService.isLoggedIn()) {
      // 💬 ممكن تضيف alert أو Toast هنا لو حبيت
      this.toastService.show('⚠️ You must log in to add movies to your watchlist!', 'info');
      this.router.navigate(['/login']);
      return;
    }

    // ✅ المستخدم مسجل دخول فعلاً، نكمل العملية
    this.wishlistService.toggleMovie(movie);
  }

  // ✅ نتحقق لو الفيلم موجود بالفعل
  isInWishlist(id: number): boolean {
    return this.wishlistService.isInWishlist(id);
  }
}
