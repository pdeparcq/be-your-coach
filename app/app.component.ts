import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {WorkoutComponent} from './workout.component';
import {WorkoutsComponent} from './workouts.component';
import {AboutComponent} from './about.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/workouts', component: WorkoutsComponent, name: 'Workouts', useAsDefault: true},
    {path: '/workouts/:id', component: WorkoutComponent, name: 'Workout'},
    {path: '/about', component: AboutComponent, name: 'About'}
])
export class AppComponent {
    constructor(private _router: Router) {}
    
    isRouteActive(routeName: string) : boolean {
        return this._router.isRouteActive(this._router.generate([routeName]));    
    }
}