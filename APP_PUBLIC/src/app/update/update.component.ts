import { Component, OnInit } from '@angular/core';
import { MyMovie } from '../model/mymovie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public editMovie: MyMovie = {
    _id: '',
    mName: '',
    mCategory: '',
    mRatings: '',
    releasedYear: '',
    estimatedEarnings: ''
  
  };

  constructor(private movieService: MovieserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var movieId = this.route.snapshot.paramMap.get('moviesId');

    this.movieService.getMovieById(movieId as string)
      .then(movie => {
        this.editMovie = movie as MyMovie;

      });
      // updateMovie();
  }

  public updateMovie(editMovie: MyMovie): void{

    const moviesid = this.route.snapshot.paramMap.get('moviesId');
    this.movieService.updateMoviess(moviesid as string, editMovie)
    .then(editMovie => {
      if (editMovie) {
        this.router.navigate([`/movies`]);
      }
    });

  }

}
