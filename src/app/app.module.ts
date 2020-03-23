import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { CardFilmComponent } from './shared/card-film/card-film.component';
import { FilmsComponent } from './pages/films/films.component';
import {FilmService} from './services/film.service';
import {APP_ROUTE} from './router/router';
import { RandomFilmComponent } from './pages/random-film/random-film.component';
import { ModalComponent } from './shared/modal/modal.component';
import { FilmFormComponent } from './shared/film-form/film-form.component';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardFilmComponent,
    FilmsComponent,
    RandomFilmComponent,
    ModalComponent,
    FilmFormComponent,
    ClickStopPropagationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    APP_ROUTE
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
