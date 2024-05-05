#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlue("\n\t STUDENT MANAGEMENT SYSTEM \n"));

let random: number = Math.floor(10000 + Math.random()* 90000);

let answers = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: ("Enter Student Name:"),
            validate: function (value) {
              if (value.trim() !== "") {
                return true;
              }
              return "Please enter a non-empty value.";
            },
          },
          {
            name: "courses",
            type: "list",
            message: chalk.bgWhite.black("Select your course which u learn:"),
            choices: [
              "TypeScript",
              "JavaScript",
              "Python",
              "sql",
              "HTML",
              "CSS",
              "UIUx",
            ],
          },
    ]
);
let stdBalance: number = 0;

let stdfees: { [key: string]: number } = {
    TypeScript: 6000,
    JavaScript: 5000,
    Python: 20000,
    sql: 3000,
    HTML: 1500,
    CSS: 2000,
    UIUx: 3000,
};

console.log(chalk.bgBlue(`\t\nYour Selected Course Fees: ${stdfees[answers.courses]}/-`));
console.log(`\t Balance: ${stdBalance}\n`);

let payment_method = await inquirer.prompt(
    [
        {
            name:"payment",
            message:chalk.bgWhite.black("Enter Your Payment Option"),
            type:"list",
            choices:["Cash","Jazz Cash","Habib Bank Limited","United bank limited"],
        },
        {
            name:"Amount",
            message:"transfer money",
            type:"input",
            validate: function (value){
                if (chalk.red(value.trim() !== "")){
                    return true;
                }
                return "please inter a some value";
            },
        },
    ]
);
let coursefee= stdfees[answers.courses];
let paymentAmount= parseFloat(payment_method.Amount);

if(coursefee === paymentAmount){
    console.log(chalk.bgBlue("\t\nCongratulation! You have to purchase this course\n"));
let viewAndexit = await inquirer.prompt(
    [
        {
            name:"information",
            message:chalk.bgWhite.black("Details About Your Course"),
            type:"list",
            choices:["View","Exit"],
        },
    ]
);
if(viewAndexit.information === "View"){
    console.log(chalk.bgBlue(`\t\n Congratulation! ${answers.students} U have to Purchase this Course\t\n`));
    console.log(chalk.bgWhite.blue(`StudentName:`+chalk.black(`${answers.students}`)));
    console.log(chalk.bgWhite.blue(`Student Roll No:`+chalk.black(`${random }`)));
    console.log(chalk.bgWhite.blue(`Student Course:`+chalk.black(`${answers.courses }`)));
    console.log(chalk.bgWhite.blue(`Student Fees:`+chalk.black(`${paymentAmount }`)));
    console.log(chalk.bgWhite.blue(`Balance:`+chalk.black(`${stdBalance + paymentAmount }`)));
}else{
    console.log(chalk.red(`Exit Student Management System`));
}
}else{
    console.log(chalk.red(`Invalid Amount Due to this Course`));
}