import {Component} from 'angular2/core';
import {StepComponent} from './step.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [StepComponent]
})
export class AppComponent { }