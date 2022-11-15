const Employee = require('./employee');

class Manager extends Employee {
    
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;

        
    };

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
// * `getRole()`&mdash;overridden to return `'Manager'`
    }

}

module.exports = Manager;