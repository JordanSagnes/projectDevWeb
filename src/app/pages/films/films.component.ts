import { Component, OnInit } from '@angular/core';
import {films as filmsList} from '../../../data/films';
import {Film} from '../../interfaces/film';
import {FilmService} from '../../services/film.service';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: Film[];
  formIsVisible: boolean;
  searchTerm: string;
  constructor(private filmService: FilmService) {
    this.formIsVisible = false;
    this.searchTerm = '';
  }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(newFilms => this.films = newFilms);
  }
  showForm() {
    this.formIsVisible = true;
  }
  hideForm($event) {
    this.formIsVisible = false;
  }
  addFilm($event: Film) {
    this.filmService.addFilm($event);
    this.formIsVisible = false;
  }
  deleteFilm($event: Film) {
    this.filmService.deleteFilm($event);
  }
  searchFilm(): Film[] {
    return this.films.filter((film) => film.original_title.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
