const Employee = require('./employee');

class Intern extends Employee {
    
    constructor(school){
        this.school = school

        super(name, id, email);
    };

    getSchool(){

    }

    getRole(){
        return "Intern";
// * `getRole()`&mdash;overridden to return `'Intern'`
    }
}


module.exports = Intern;
