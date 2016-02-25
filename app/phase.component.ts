import {Component, Input} from 'angular2/core';
import {Phase} from './phase';
import {SetComponent} from './set.component';
import {Set} from './set';

@Component({
    selector: 'my-phase',
    templateUrl: 'app/phase.component.html',
    directives: [SetComponent]
})
export class PhaseComponent {
    @Input() phase : Phase;
    
    addSet(){
        this.phase.addSet(new Set());
    }
}