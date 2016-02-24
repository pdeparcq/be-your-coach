import {Step} from './step';

export class Set{
    public steps : Step[];
    
    constructor() {
        this.steps = [];
    }
    
    addStep(step : Step) {
        this.steps.push(step);
    }
}