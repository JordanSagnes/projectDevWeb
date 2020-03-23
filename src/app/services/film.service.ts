import { Injectable } from '@angular/core';
import {films as filmsList} from '../../data/films';
import {Film} from '../interfaces/film';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private filmsObservable: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>([]);
  private films: Film[];
  private filmsFavorisObservable: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>([]);
  private filmsFavoris: Film[];

  constructor() {
    this.films = filmsList;
    this.filmsFavoris = [];
    this.filmsObservable.next(filmsList);
  }

  public getFilms(): Observable<Film[]> {
    return this.filmsObservable;
  }
  public getFilmsFavoris(): Observable<Film[]> {
    return this.filmsFavorisObservable;
  }
  public addFilm(newFilm: Film): void {
    this.films.push(newFilm);
    this.filmsObservable.next(this.films);
  }
  public addFilmToFavori(newFilm: Film): void {
    this.filmsFavoris.push(newFilm);
    this.filmsFavorisObservable.next(this.filmsFavoris);
  }
  public deleteFilm(filmToDelete: Film): void {
    this.films = this.films.filter(film => film.original_title !== filmToDelete.original_title);
    this.filmsObservable.next(this.films);
  }
  public deleteFilmFavoris(filmToDelete: Film): void {
    this.filmsFavoris = this.filmsFavoris.filter(film => film.original_title !== filmToDelete.original_title);
    this.filmsFavorisObservable.next(this.filmsFavoris);
  }
  public modifyFilm(newFilm: Film, oldFilm: Film) {
    this.films = this.films.map((film) => {
      if (film.original_title !== oldFilm.original_title) {
        return film;
      } else {
        return newFilm;
      }
    });
    this.filmsObservable.next(this.films);
  }
}
