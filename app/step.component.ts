import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Tag} from './tag';

@Component({
    selector: 'my-step',
    templateUrl: 'app/step.component.html',
    directives: [NgFor]
})
export class StepComponent {
    public newTagName : string; 
    public tags : Tag[];
    
    constructor(){
        this.tags = [];
        this.newTagName = '';
    }
    
    addTag(){
        this.tags.push(new Tag(this.newTagName));
        this.newTagName = '';
    }
}