// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, gitUsername) {
        super(name, id, email);

        this.gitUsername = gitUsername;
    }
}

Engineer.prototype.getGithub = function() {
    return this.gitUsername;
}

Engineer.prototype.role= function() {
    return "Engineer";
}

module.exports = Engineer;