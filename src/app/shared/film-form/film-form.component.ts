import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from '../../interfaces/film';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {
  @Input() film: Film;
  @Input() action: string;
  @Output() submitForm = new EventEmitter<Film>();

  constructor() {
    if (this.film === undefined) {
      this.film = {
        poster_path: '',
        id: null,
        adult: null,
        backdrop_path: null,
        original_language: null,
        original_title: '',
        genre_ids: null,
        title: null,
        vote_average: null,
        overview: '',
        popularity: null,
        vote_count: null,
        release_date: '',
        video: null
      };
    }
  }

  ngOnInit(): void {
  }
  submitFormEvent(): void {
    console.log(this.film);
    this.submitForm.emit(this.film);
  }

}
