import { Component, OnInit } from '@angular/core';
import { MyMovie } from '../model/mymovie';
import {  MovieserviceService } from '../services/movieservice.service';


@Component({
  selector: 'app-mymovielist',
  templateUrl: './mymovielist.component.html',
  styleUrls: ['./mymovielist.component.css']
})
export class MymovielistComponent implements OnInit {

  
  public movies: MyMovie[] = [];
  

  constructor(private movieService: MovieserviceService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies() {

    this.movieService
      .getMovies()
      .then(movies => {
        console.log("***************************");
        console.log(movies);
        this.movies = movies as MyMovie[]
      });
  }

}
