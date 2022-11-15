const { default: inquirer } = require("inquirer");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){


    }

    getEmail(){

    }

    getRole(){
        return "Employee";
        //`getRole()`&mdash;returns `'Employee'`
    }
}



module.exports = Employee;