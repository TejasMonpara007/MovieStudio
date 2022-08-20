import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {

  constructor(private myMovieService: MovieserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.deleteMovie();
  }

  public deleteMovie() {
    const movieid = this.route.snapshot.paramMap.get('moviesId');
    this.myMovieService.deleteMovie(movieid as string)
      .then(() => this.router.navigate([`/movies`])
    );
  }

}
