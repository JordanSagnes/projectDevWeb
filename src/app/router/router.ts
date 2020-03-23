import {FilmsComponent} from '../pages/films/films.component';
import {RouterModule} from '@angular/router';
import {RandomFilmComponent} from '../pages/random-film/random-film.component';

const ROUTES = [
    {path: '', redirectTo: '/films', pathMatch: 'full'},
    {path: 'films', component: FilmsComponent},
    {path: 'random', component: RandomFilmComponent},
];

export const APP_ROUTE = RouterModule.forRoot(ROUTES);
