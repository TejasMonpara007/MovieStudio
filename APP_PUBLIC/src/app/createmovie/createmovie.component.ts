import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyMovie } from '../model/mymovie';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.css'],
  providers: [MovieserviceService]
})
export class CreatemovieComponent implements OnInit {

  public createMovie: MyMovie = {
    _id: '',
    mName: '',
    mCategory: '',
    mRatings: '',
    releasedYear: '',
    estimatedEarnings: ''
  
  };

  constructor(private myMovieService: MovieserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  public createNewMovie(newMovie: MyMovie): void{
    this.myMovieService.createMovie(newMovie)
    .then(movie => {
      if (movie) {
        this.router.navigate([`/movies`]);
      }
    });
  }

}
