const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// inquirer recurive prompt option
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
const recursive = require('inquirer-recursive');


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

inquirer.prompt([{
    type: 'recursive',
    message: 'Add a new employee?',
    name: 'users',
    prompts: [
        {
            type: 'list',
            message: 'Employee type?',
            name: 'employee_type',
            choices: ["Employee", "Manager", "Engineer", "Intern"],
            default: "Employee"            
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is user\'s name?',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'Id?',
            validate: function (value) {
                var digitsOnly = /\d+/;
                if (digitsOnly.test(value)) { return true; }
                return 'Ids can only be numbers.';
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is employee\'s eMail?'        
        },
        {
            type: 'input',
            name: 'office_number',
            message: 'Manager\'s office number?',
            when: (answers) => answers.employee_type === "Manager"       
        },
        {
            type: 'input',
            name: 'github_username',
            message: 'GitHub username?',
            when: (answers) => answers.employee_type === "Engineer"       
        },
        {
            type: 'input',
            name: 'school',
            message: 'School name?',
            when: (answers) => answers.employee_type === "Intern"       
        },
    ]
}]).then(function(answers) {
    console.log(answers.users);
});

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

