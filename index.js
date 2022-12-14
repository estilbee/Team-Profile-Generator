const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const fs = require('fs');
const generateHTML = require('./src/generatehtml')

const employeeList = [];

const getManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        }
    ])
    .then(answers => {
        console.log(answers)
        const {name, id, email, officeNumber} = answers
        employeeList.push(new Manager(name, id, email, officeNumber))
        return menu()
})
}

const getEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the engineer's GitHub name?",
            name: "gitHub"
        }
    ])
   .then(answers => {
    console.log(answers)
    const {name, id, email, gitHub} = answers
    employeeList.push(new Engineer(name, id, email, gitHub))
    return menu()
    
})
}

const getIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What school did the intern attend?",
            name: "school"
        }
    ])
   .then(answers => {
    console.log(answers)
    const {name, id, email, school} = answers
    employeeList.push(new Intern(name, id, email, school))
    console.log(employeeList)
    console.log(`
    ----------------------
    `)
    return menu()
    
})
}

const writeHTML = () => {
    fs.writeFileSync("./dist/index.html", generateHTML(employeeList))
}


const endProgram = () => {
    console.log("Exiting program.")
    return;
}

function menu(){
    return inquirer.prompt([
        {
            type: "list",
            message: "Build your team: ",
            choices: ["Add a manager", "Add an engineer", "Add an intern", "Exit"],
            name: "menuOption"
        }
    ])
    .then( ({menuOption}) => {
        switch(menuOption){
            case "Add a manager":
                return getManager();
            case "Add an engineer":
                return getEngineer();
            case "Add an intern":
                return getIntern();
            case "Exit":
                return writeHTML();       
        }
    })
}

menu();