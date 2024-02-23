import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AddMovieComponent} from "./add-movie/add-movie.component";
import {ListMoviesComponent} from "./list-movies/list-movies.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddMovieComponent, ListMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'moviesWeb';
}
