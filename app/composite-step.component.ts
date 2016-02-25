import {Component, Input} from 'angular2/core';
import {CompositeStep} from './composite-step';
import {Step} from './step';
import {StepComponent} from './step.component';

@Component({
    selector: 'my-composite-step',
    templateUrl: 'app/composite-step.component.html',
    styleUrls: ['app/composite-step.component.css'],
    directives: [StepComponent]
})
export class CompositeStepComponent {
    @Input("step") compositeStep : CompositeStep;
    
    addStep() {
        this.compositeStep.addStep(new Step());
    }
    
    removeStep(step : Step) {
        this.compositeStep.removeStep(step);
    }
}