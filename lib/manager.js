const Employee = require('./employee');

class Manager extends Employee {
    
    constructor(officeNumber){
        this.officeNumber = officeNumber

        super(name, id, email);
    };

    getRole(){
// * `getRole()`&mdash;overridden to return `'Manager'`
    }

}

module.exports = Manager;