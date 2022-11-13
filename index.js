const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const fs = require('fs');



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

}
getManager();

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
            name: "GitHub"
        }
    ])
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
            choices: ["Add an engineer", "Add an intern", "Exit"],
            name: "menu"
        }
    ])
    .then( ({option}) => {
        switch(option){
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