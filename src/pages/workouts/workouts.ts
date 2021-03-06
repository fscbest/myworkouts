import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import {WorkoutService} from "../../app/services/workout.service";
import {WorkoutDetailsPage} from "../workout-details/workout-details";


@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [WorkoutService]
})
export class WorkoutsPage {
  workouts: any;
  constructor(public navCtrl: NavController,
              private _workoutService: WorkoutService) {

    //Just to test HTTP
    /*this._workoutService.searchMusic("John")
      .subscribe(res => {
        console.log(res.artists.items);
      })*/

    this._workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
      console.log("REFRESH");
    });
  }

  ngOnInit(){
    this._workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  workoutSelected(event, workout){
    this.navCtrl.push(WorkoutDetailsPage, {workout:workout});
  }
}
