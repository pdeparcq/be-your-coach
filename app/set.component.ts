import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Set} from './set';
import {CompositeStepComponent} from './composite-step.component'

@Component({
    selector: 'my-set',
    templateUrl: 'app/set.component.html',
    styleUrls: ['app/set.component.css'],
    directives: [CompositeStepComponent]
})
export class SetComponent{
    @Input() set : Set;
}