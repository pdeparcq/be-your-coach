import {Component, Input} from 'angular2/core';
import {Workout} from './workout';
import {PhaseComponent} from './phase.component';
import {WorkoutService} from './workout.service';
import {RouteParams} from 'angular2/router'

@Component({
    selector: 'my-workout',
    templateUrl : 'app/workout.component.html',
    directives: [PhaseComponent],
    providers: [WorkoutService]
})
export class WorkoutComponent {
    @Input() workout : Workout;
    
    constructor(private _workoutService : WorkoutService, private _routeParams: RouteParams) {
        if(!this.workout){
            this._workoutService.getWorkout(this._routeParams.get('id')).then(w => this.workout = w);
        }
    }
}