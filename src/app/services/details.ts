import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imovie } from '../modals/imovie';

@Injectable({
  providedIn: 'root',
})
export class Details {
    constructor(private _HttpClient: HttpClient) {}
 getMovieDetails(id: string) {
  return this._HttpClient.get<Imovie>(`https://api.themoviedb.org/3/movie/${id}?api_key=358ed746e3532b2bf837fd65cf796c0f&language=en-US`);
}
getRecommendedMovies(id: string) {
  return this._HttpClient.get<{results: Imovie[]}>(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=358ed746e3532b2bf837fd65cf796c0f&language=en-US&page=1`);
}

}
