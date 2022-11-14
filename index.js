const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const fs = require('fs');

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
        console.log(employeeList)
        console.log(`
        ----------------------
        `)
        return menu()

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
    console.log(employeeList)
    console.log(`
    ----------------------
    `)
    return menu()
    
})
}

const endProgram = () => {
    console.log("Exiting program.")
    return;
}

function menu(){
    return inquirer.prompt([
        {
            type: "list",
            message: "Choose an option: ",
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
                return endProgram();       
        }
    })
}

menu();