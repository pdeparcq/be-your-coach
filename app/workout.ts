import {Phase} from './phase';

export class Workout {
    public phases: Phase[];

    constructor(public name: string) {
        this.phases = [new Phase("warm-up"), new Phase("sets"), new Phase("cooldown")];
    }
    
    get distance() : number {
         var total = 0;
        this.phases.forEach(p => total += p.distance);
        return total;
    }
}