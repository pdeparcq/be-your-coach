import {WeekDay} from './domain/common/enumerations';
import FullName = require('./domain/common/full-name');
import Discipline =  require('./domain/training/discipline');
import Training = require('./domain/training/training');
import Athlete = require('./domain/training/athlete');
import WeekPlan = require('./domain/training/week-plan');
import moment = require('moment');

var swimming = new Discipline("swimming");
var cycling = new Discipline("cycling");
var running = new Discipline("running");

var plan = new WeekPlan(new Athlete(new FullName('Pieter', 'Deparcq')), 2016, 1);
plan.scheduleTraining(swimming, WeekDay.Tuesday, moment.duration(1,"hours"))
plan.scheduleTraining(running, WeekDay.Tuesday, moment.duration(70,"minutes"));
plan.scheduleTraining(swimming, WeekDay.Saturday, moment.duration(1,"hours"));
plan.scheduleTraining(cycling, WeekDay.Sunday, moment.duration(2,"hours"));

console.info(plan);