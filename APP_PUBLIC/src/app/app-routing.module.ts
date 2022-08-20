import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmovieComponent } from './aboutmovie/aboutmovie.component';
import { CreatemovieComponent } from './createmovie/createmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { MoviehomeComponent } from './moviehome/moviehome.component';
import { MymoviedetailsComponent } from './mymoviedetails/mymoviedetails.component';
import { MymovielistComponent } from './mymovielist/mymovielist.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '', component: MoviehomeComponent
  },
  {
    path: 'movies', component: MymovielistComponent
  },
  {
    path: 'about', component: AboutmovieComponent
  },

  {
    path: 'movies/:moviesId', component: MymoviedetailsComponent
  },
  {
    path: 'new', component: CreatemovieComponent
  },

  {
    path: 'delete/:moviesId', component: DeletemovieComponent
  },

  {
    path: 'update/:moviesId', component: UpdateComponent
  },

  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
