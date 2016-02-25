import {CompositeStep} from './composite-step';

export class Set{
    public numberOfExecutions : number;
    public step : CompositeStep;
    
    constructor() {
        this.numberOfExecutions = 1;
        this.step = new CompositeStep();
    }
    
    get distance() : number {
        return this.step.distance * this.numberOfExecutions;
    }
}