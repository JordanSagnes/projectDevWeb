import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from '../../interfaces/film';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.scss']
})
export class CardFilmComponent implements OnInit {
  @Input() film: Film;
  @Output() deleteFilm = new EventEmitter<Film>();
  formIsVisible: boolean;
  filmsFavoris: Film[];

  constructor(private filmService: FilmService) {
    this.formIsVisible = false;
    this.filmsFavoris = [];
  }

  ngOnInit(): void {
    this.filmService.getFilmsFavoris().subscribe(films => this.filmsFavoris = films);
  }
  deleteFilmEvent(): void {
    this.deleteFilm.emit(this.film);
  }
  showForm(): void {
    this.formIsVisible = true;
  }
  hideForm($event): void {
    this.formIsVisible = false;
  }
  editFilm($event): void {
    this.filmService.modifyFilm($event, this.film);
    this.formIsVisible = false;
  }
  isFavori(): boolean {
    return this.filmsFavoris.filter(filmFav => filmFav.original_title === this.film.original_title).length > 0;
  }
  addFavori(): void {
    this.filmService.addFilmToFavori(this.film);
  }
  deleteFavori(): void {
    this.filmService.deleteFilmFavoris(this.film);
  }
}
