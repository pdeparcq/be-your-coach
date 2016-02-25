import {Step} from './step';

export class CompositeStep{
    public steps : Step[];
    
    constructor(){
        this.steps = [new Step()];
    }
    
    addStep(step : Step) {
        this.steps.push(step);
    }
    
    removeStep(step: Step) {
        this.steps.splice(this.steps.indexOf(step), 1);
    }
    
    get distance() : number {
        var total = 0;
        this.steps.forEach(s => total += s.distance);
        return total;
    }
}