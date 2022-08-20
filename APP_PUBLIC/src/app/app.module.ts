import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieserviceService } from './services/movieservice.service';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { MoviehomeComponent } from './moviehome/moviehome.component';
import { MyframeworkComponent } from './myframework/myframework.component';
import { MymovielistComponent } from './mymovielist/mymovielist.component';
import { MymoviedetailsComponent } from './mymoviedetails/mymoviedetails.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { CreatemovieComponent } from './createmovie/createmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { AboutmovieComponent } from './aboutmovie/aboutmovie.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    //AppComponent,
    MoviehomeComponent,
    MyframeworkComponent,
    MymovielistComponent,
    MymoviedetailsComponent,
    NavigationbarComponent,
    CreatemovieComponent,
    DeletemovieComponent,
    AboutmovieComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MovieserviceService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [MyframeworkComponent]
})
export class AppModule { }
