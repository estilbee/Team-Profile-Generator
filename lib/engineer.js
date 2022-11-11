const Employee = require('./employee');

class Engineer extends Employee {
    

    constructor(gitHub){
        this.gitHub = gitHub

        super(name, id, email);
    };
    
    getGithub(){

    }

    getRole(){
//// * `getRole()`&mdash;overridden to return `'Engineer'`
    }

}

module.exports = Engineer;