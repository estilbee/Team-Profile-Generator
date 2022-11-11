const Employee = require('./employee');

class Intern extends Employee {
    
    constructor(school){
        this.school = school

        super(name, id, email);
    };

    getSchool(){

    }

    getRole(){
// * `getRole()`&mdash;overridden to return `'Intern'`
    }
}


module.exports = Intern;
