import {Step} from './step';

export class Set{
    public steps : Step[];
    
    constructor() {
        this.steps = [];
    }
    
    addStep(step : Step) {
        this.steps.push(step);
    }
    
    removeStep(step: Step) {
        this.steps.splice(this.steps.indexOf(step), 1);
    }
}