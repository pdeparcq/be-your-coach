import {Component, Input} from 'angular2/core';
import {Workout} from './workout';
import {PhaseComponent} from './phase.component';
@Component({
    selector: 'my-workout',
    templateUrl : 'app/workout.component.html',
    directives: [PhaseComponent]
})
export class WorkoutComponent {
    @Input() workout : Workout;
}