import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Step} from './step';
import {Tag} from './tag';

@Component({
    selector: 'my-step',
    templateUrl: 'app/step.component.html',
    directives: [NgFor]
})
export class StepComponent {
    public newTagName : string; 
    @Input() step : Step;
    
    constructor(){
        this.newTagName = '';
    }
    
    addTag(){
        if(this.newTagName !== ''){
            this.step.addTag(new Tag(this.newTagName));
            this.newTagName = '';
        }
    }
}