
import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
;

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3/";
  private baseApiKey = "api_key=d0e2a349d23feda95b475f505e38d599"
  constructor(public http: Http) {
 
  }

  getLatestMovies(page = 1){
    return this.http.get(`${this.baseApiPath}movie/popular?${page}&` + this.baseApiKey);

  }

  getMoviesDetails(filmeId){
    return this.http.get(`${this.baseApiPath}movie/${filmeId}?${this.baseApiKey}`);

  }

}
