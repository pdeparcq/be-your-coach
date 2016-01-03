import {FullName, WeekDay} from './common';

export class Athlete {
    id: string;
    fullName: FullName;

    constructor(fullName: FullName) {
        this.fullName = fullName;
    }
}

export class Discipline {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class Training {
    disciplineName: string;
    dayOfWeek: WeekDay;
    duration: moment.Duration;

    constructor(discipline: Discipline, dayOfWeek: WeekDay, duration: moment.Duration) {
        this.disciplineName = discipline.name;
        this.dayOfWeek = dayOfWeek;
        this.duration = duration;
    }
}

export class WeekPlan {
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
    
    scheduleTraining(discipline: Discipline, dayOfWeek: WeekDay, duration : moment.Duration) {
        this.trainings.push(new Training(discipline, dayOfWeek, duration))
    }
}