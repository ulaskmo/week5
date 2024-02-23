import { Component } from '@angular/core';
import { MovieServiceService } from "../services/movie-service.service";

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.sass'
})
export class AddMovieComponent {
  constructor(private movieService:MovieServiceService) {
  }

  addNewMovie(movietitle:HTMLInputElement, moviedirector:HTMLInputElement, movieyear:HTMLInputElement):boolean {
    this.movieService.addMovie(movietitle.value, moviedirector.value, movieyear.value);
    return false;
  }
}
