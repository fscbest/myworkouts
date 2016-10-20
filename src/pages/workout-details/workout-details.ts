import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutsPage} from "../workouts/workouts";

@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html',
  providers: [WorkoutService]
})
export class WorkoutDetailsPage {
  workout: any;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private _workoutService: WorkoutService) {
    this.workout = navParams.get('workout');
  }

  deleteWorkout(workoutId){
    this._workoutService.deleteWorkout(workoutId)
      .subscribe(data => {
          this.result = data
        },
        err => console.log(err),
        () => {
          console.log('Workout Deleted');
          this.navCtrl.setRoot(WorkoutsPage);
        });
  }

}
