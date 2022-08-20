import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";

import { MyMovie } from '../model/mymovie';


@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  
  private movieUrl = 'http://localhost:3000/api/movies';
  constructor(private http:HttpClient){}

  getMovies() : Promise<void | MyMovie[]>{

    return this.http.get(this.movieUrl)
     .toPromise()
     .then(response => response as MyMovie[])
     .catch(this.errorHandler);
   }

   getMovieById(myMovieId: string) {
    return this.http.get(`${this.movieUrl}/${myMovieId}`)
    .toPromise()
    .then(response => response as MyMovie)
    .catch(this.errorHandler);
  }

  
  createMovie(createNewMovie: MyMovie): Promise<void | MyMovie> {
    return this.http.post(this.movieUrl, createNewMovie)
      .toPromise()
      .then(response => response as MyMovie)
      .catch(this.errorHandler);
  }

  deleteMovie(myMovieId : string) {
    return this.http.delete(`${this.movieUrl}/${myMovieId}`)
    .toPromise()
    .then(response => response as MyMovie)
    .catch(this.errorHandler);
  }

  updateMoviess(myMovieId: string,editMovie: MyMovie): Promise<void | MyMovie> {
    
    return this.http.put(`${this.movieUrl}/${myMovieId}`, editMovie)
    .toPromise()
    .then(response => response as MyMovie)
    .catch(this.errorHandler);
  }
    
   private errorHandler(error: any){
    console.log(error);
}

}
