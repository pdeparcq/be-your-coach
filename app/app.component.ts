import {Component} from 'angular2/core';
import {PhaseComponent} from './phase.component';
import {Phase} from './phase';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [PhaseComponent]
})
export class AppComponent {
    public phase : Phase;
    
    constructor() {
        this.phase = new Phase('warmup');
    }
}