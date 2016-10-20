import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutsPage} from "../workouts/workouts";

@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html',
  providers: [WorkoutService]
})
export class AddWorkoutPage {

  constructor(public navCtrl: NavController,
              private _workoutService: WorkoutService) {
    this.title;
    this.note;
    this.type;
    this.result;
  }

  onSubmit(){
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    //Add Workout
    this._workoutService.addWorkout(workout)
      .subscribe(data => {
        this.result = data
      },
      err => console.log(err),
        () => {
          console.log('Workout Added');
          this.navCtrl.setRoot(WorkoutsPage);
        });


  }

}
