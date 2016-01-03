export enum WeekDay{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export class FullName{
    firstName: string;
    lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export class Distance{
    meters : number;
    
    constructor(meters: number){
        this.meters = meters;
    }
}