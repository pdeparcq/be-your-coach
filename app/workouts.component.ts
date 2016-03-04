import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Workout} from './workout';
import {WorkoutComponent} from './workout.component';
import {WorkoutService} from './workout.service';

@Component({
    selector: 'my-workouts',
    templateUrl : 'app/workouts.component.html',
    providers: [WorkoutService]
})
export class WorkoutsComponent {
    public workouts: Workout[];

    constructor(private _router: Router, private _workoutService: WorkoutService) {
        this._workoutService.getWorkouts().then(w => this.workouts = w)
    }

    openWorkout(workout: Workout) {
        this._router.navigate(['/Workout', { id: workout.name }])
    }
}