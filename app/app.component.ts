import {Component} from 'angular2/core';
import {WorkoutComponent} from './workout.component';
import {Workout} from './workout';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [WorkoutComponent]
})
export class AppComponent {
    public workout : Workout;
    
    constructor() {
        this.workout = new Workout('Test Workout');
    }
}