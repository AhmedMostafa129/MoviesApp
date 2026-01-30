import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router, NavigationEnd, RouterLink } from "@angular/router";
import { MoviesServices } from "../services/movies-services";
import { Category } from "../modals/category";
import { Showcatogry } from "../services/showcatogry";
import { filter } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mv-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css'],
})
export class MvDetails implements OnInit {
  movie: any;
  category: Category[] = [];
  recommendedMovies: any[] = [];
  trailerUrl: SafeResourceUrl | null = null;

  private sanitizer: DomSanitizer = inject(DomSanitizer);

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesServices,
    private _showcatogry: Showcatogry,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.category = this._showcatogry.getAllcategory();

    // مراقبة تغير الـ route لتحديث الفيلم تلقائيًا
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadMovie();
      });

    // تحميل أول مرة
    this.loadMovie();
  }

  loadMovie() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.movie = this.moviesService.getMovieById(id);
      if (this.movie) {
        this.recommendedMovies = this.moviesService.getRecommendedMovies(this.movie.categoryId, this.movie.id);
        window.scrollTo(0, 0); // ✅ التمرير لأعلى الصفحة عند تحميل الفيلم

        // تجهيز رابط التريلر بشكل آمن
        if (this.movie.trailerId) {
          const url = `https://www.youtube.com/embed/${this.movie.trailerId}`;
          this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        } else {
          this.trailerUrl = null;
        }
      }
    }
  }

  getCategoryName(id: number) {
    const cat = this.category.find(c => c.id === id);
    return cat ? cat.name : 'Unknown';
  }

  goToMovie(id: number) {
    this.router.navigate(['/mvDetails', id]);
  }

  openInYoutube() {
    if (this.movie && this.movie.trailerId) {
      window.open(`https://www.youtube.com/watch?v=${this.movie.trailerId}`, '_blank');
    }
  }
}
