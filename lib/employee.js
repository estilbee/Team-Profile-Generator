const { default: inquirer } = require("inquirer");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
       return this.name;

    }

    getEmail(){
        return this.email;
    }

    getId(){
        return this.id;
    }

    getRole(){
        return "Employee";
        //`getRole()`&mdash;returns `'Employee'`
    }
}



module.exports = Employee;