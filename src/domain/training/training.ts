import {WeekDay} from '../common/enumerations';
import Discipline =  require('./discipline');

class Training {
    disciplineName: string;
    dayOfWeek: WeekDay;
    duration: moment.Duration;

    constructor(discipline: Discipline, dayOfWeek: WeekDay, duration: moment.Duration) {
        this.disciplineName = discipline.name;
        this.dayOfWeek = dayOfWeek;
        this.duration = duration;
    }
}

export = Training;
