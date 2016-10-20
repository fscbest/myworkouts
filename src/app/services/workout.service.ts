import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService{
  //private searchUrl: string;
  private isOnWork = true;
  constructor(private _http:Http){
    this.apiKey = '8RUMqLurVTX4OrwCi_BHwLPpTCZT-lhd';
    this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkoutsappb/collections/workouts';
  }

  //Just to test HTTP
  /*searchMusic(str:string, type='artist'){
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchUrl)
      .map(res=>res.json());
  }*/

  getWorkouts(){
    return this._http.get(this.workoutsUrl+"?apiKey="+this.apiKey)
      .map(res=>res.json());

  }

  addWorkout(workout){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(this.workoutsUrl+"?apiKey="+this.apiKey, JSON.stringify(workout),
      {headers:headers})
      .map(res => res.json());

  }

  deleteWorkout(workoutId){
    return this._http.delete(this.workoutsUrl+"/"+workoutId+"?apiKey="+this.apiKey)
      .map(res=>res.json());
  }
}
