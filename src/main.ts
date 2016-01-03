import * as common from './domain/common'
import * as training from './domain/training';
import * as moment from 'moment';

var swimming = new training.Discipline("swimming");
var cycling = new training.Discipline("cycling");
var running = new training.Discipline("running");

var plan = new training.WeekPlan(new training.Athlete(new common.FullName('Pieter', 'Deparcq')), 2016, 1);
plan.scheduleTraining(swimming, common.WeekDay.Tuesday, moment.duration(1,"hours"))
plan.scheduleTraining(running, common.WeekDay.Tuesday, moment.duration(70,"minutes"));
plan.scheduleTraining(swimming, common.WeekDay.Saturday, moment.duration(1,"hours"));
plan.scheduleTraining(cycling, common.WeekDay.Sunday, moment.duration(2,"hours"));

console.info(plan);