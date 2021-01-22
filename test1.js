const inquirer = require('inquirer');

inquirer.registerPrompt('recursive', require('inquirer-recursive'));

const recursive = require('inquirer-recursive');

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
        }, {
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
    ]
}]).then(function(answers) {
    console.log(answers.users);
});

// var userQuestions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is user\'s name?',
//         validate: function (value) {
//             if ((/.+/).test(value)) { return true; }
//             return 'name is required';
//         }
//     }, {
//         type: 'input',
//         name: 'age',
//         message: 'How old is he?',
//         validate: function (value) {
//             var digitsOnly = /\d+/;
//             if (digitsOnly.test(value)) { return true; }
//             return 'Invalid age! Must be a number genius!';
//         }
//     }
// ];

// inquirer.prompt([{
//     type: 'recursive',
//     message: 'Add a new user ?',
//     name: 'users',
//     prompts: userQuestions
// }]).then(function(answers) {
//     console.log(answers.users);
// });