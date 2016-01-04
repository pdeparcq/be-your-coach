import {WeekDay} from '../common/enumerations';
import Discipline = require('./discipline');
import Training = require('./training');
import Athlete = require('./athlete');

class WeekPlan {
    athleteId: string;
    year: number;
    weekNumber: number;
    trainings: Array<Training>;

    constructor(athlete: Athlete, year: number, weekNumber: number) {
        this.athleteId = athlete.id;
        this.year = year;
        this.weekNumber = weekNumber;
        this.trainings = new Array<Training>();
    }

    scheduleTraining(discipline: Discipline, dayOfWeek: WeekDay, duration: moment.Duration) {
        this.trainings.push(new Training(discipline, dayOfWeek, duration))
    }
}

export = WeekPlan;