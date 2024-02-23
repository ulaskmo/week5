import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor() { }

  movieList = [
    {title: "The God father", year: "1972", director: "Francis Ford Coppola"}
  ];

  addMovie(movieTitle: string, moviedirector: string, movieyear: string){
    this.movieList.push({title: movieTitle, director: moviedirector, year: movieyear});
  }

  getMovies(){
    return this.movieList;
  }
}
