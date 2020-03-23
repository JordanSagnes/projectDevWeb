import { Component, OnInit } from '@angular/core';
import {Film} from '../../interfaces/film';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-random-film',
  templateUrl: './random-film.component.html',
  styleUrls: ['./random-film.component.scss']
})
export class RandomFilmComponent implements OnInit {
  films: Film[];
  randomFilm: Film;
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(newFilms => {
      this.films = newFilms;
      this.randomize();
    });
  }
  deleteFilm($event: Film) {
    this.filmService.deleteFilm($event);
  }
  randomize(): void {
    const randomNumber = Math.floor(Math.random() * this.films.length);
    this.randomFilm =  this.films[randomNumber];
  }
}
