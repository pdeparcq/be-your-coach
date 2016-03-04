import {Injectable} from 'angular2/core';
import {Workout} from './workout';

@Injectable()
export class WorkoutService {
    getWorkouts() : Promise<Workout[]>{
        return Promise.resolve([new Workout("test_workout_1"), new Workout("test_workout_2"), new Workout("test_workout_3")]);
    }
    
    getWorkout(id : string) : Promise<Workout>{
        return Promise.resolve(new Workout('Test Workout'));
    }
}