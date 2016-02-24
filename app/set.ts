import {Step} from './step';

export class Set{
    public steps : Step[];
    public numberOfExecutions : number;
    
    constructor() {
        this.steps = [];
        this.numberOfExecutions = 1;
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
    
    get totalDistance() : number {
        return this.distance * this.numberOfExecutions;
    }
}