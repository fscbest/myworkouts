import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [WorkoutService]
})
export class WorkoutsPage {

  constructor(public navCtrl: NavController,
              private _workoutService: WorkoutService) {

    //Just to test HTTP
    /*this._workoutService.searchMusic("John")
      .subscribe(res => {
        console.log(res.artists.items);
      })*/
  }

}
