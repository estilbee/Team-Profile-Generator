const Employee = require('./employee');

class Engineer extends Employee {
    

    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;

        
    };
    
    getGithub(){
        return this.gitHub;

    }

    getRole(){
        return "Engineer";
//// * `getRole()`&mdash;overridden to return `'Engineer'`
    }

}

module.exports = Engineer;