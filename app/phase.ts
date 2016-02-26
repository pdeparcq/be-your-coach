import {Set} from './set';

export class Phase {
    public sets: Set[];
    
    constructor(public name:string){
        this.sets = [new Set()];
    }
    
    addSet(set: Set){
        this.sets.push(set);
    }
    
    removeSet(set : Set){
        this.sets.splice(this.sets.indexOf(set), 1);
    }
    
    get distance() : number {
        var total = 0;
        this.sets.forEach(s => total += s.distance);
        return total;
    }
}