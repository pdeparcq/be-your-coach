import {Component} from 'angular2/core';
import {StepComponent} from './step.component';
import {Step} from './step';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [StepComponent]
})
export class AppComponent { 
    public step : Step;
    
    constructor() {
        this.step = new Step();
    }
}