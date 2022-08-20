import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieserviceService } from '../services/movieservice.service';
import { MyMovie } from '../model/mymovie';

@Component({
  selector: 'app-mymoviedetails',
  templateUrl: './mymoviedetails.component.html',
  styleUrls: ['./mymoviedetails.component.css'],
  providers: [MovieserviceService]
})
export class MymoviedetailsComponent implements OnInit {

  public movieDetails = new MyMovie();

  constructor(private myMovieService: MovieserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovieDetais();
  }

  private getMovieDetais() {
    const moviesid = this.route.snapshot.paramMap.get('moviesId');
    console.log(moviesid);
    this.myMovieService.getMovieById(moviesid as string)
      .then(movieDetails => {
        this.movieDetails = movieDetails as unknown as MyMovie;
    });
}

}
