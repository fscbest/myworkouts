import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{
  //private searchUrl: string;
  constructor(private _http:Http){

  }

  //Just to test HTTP
  /*searchMusic(str:string, type='artist'){
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchUrl)
      .map(res=>res.json());
  }*/
}
