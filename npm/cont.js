let validator = require('validator');
let chalk = require('chalk');

console.log(validator.isEmail('birongramadhan18@gmail.com'));
console.log(validator.isMobilePhone('080646464634', 'id-ID'));
console.log(validator.isStrongPassword('minLength: 8'));

console.log(chalk.red.bgYellow('Hallo'));
console.log(chalk.italic.bgRed('World'));
