import {Component} from 'angular2/core';
import {SetComponent} from './set.component';
import {Set} from './set';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [SetComponent]
})
export class AppComponent { 
    public set : Set;
    
    constructor() {
        this.set = new Set();
    }
}