import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MovieServiceService} from "../services/movie-service.service";

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.sass'
})
export class ListMoviesComponent implements OnInit{
  movies:any[] = [];

  constructor(private movieService:MovieServiceService) {
  }

  ngOnInit(){
    this.movies = this.movieService.getMovies();
  }
}
