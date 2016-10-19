import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { TabsPage } from '../pages/tabs/tabs';
import { AddWorkoutPage } from "../pages/add-workout/add-workout";
import { WorkoutDetailsPage } from "../pages/workout-details/workout-details";




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    WorkoutsPage,
    AddWorkoutPage,
    WorkoutDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    WorkoutsPage,
    AddWorkoutPage,
    WorkoutDetailsPage
  ],
  providers: []
})
export class AppModule {}
