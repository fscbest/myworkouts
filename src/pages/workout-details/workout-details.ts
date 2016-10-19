import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
  workout: any;

  constructor(public navCtrl: NavController,
              private navParams: NavParams) {
    this.workout = navParams.get('workout');
  }

}
