import FullName = require('../common/full-name');

class Athlete {
    id: string;
    fullName: FullName;

    constructor(fullName: FullName) {
        this.fullName = fullName;
    }
}

export = Athlete;