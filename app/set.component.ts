import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Set} from './set';
import {Step} from './step';
import {StepComponent} from './step.component';

@Component({
    selector: 'my-set',
    templateUrl: 'app/set.component.html',
    styleUrls: ['app/set.component.css'],
    directives: [StepComponent]
})
export class SetComponent{
    @Input() set : Set;
    
    addStep() {
        this.set.addStep(new Step());
    }
    
    removeStep(step : Step) {
        this.set.removeStep(step);
    }
}