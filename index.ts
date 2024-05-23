#!/ usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to CodeWithKiran - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
    name: "userGuessNumber",
    type: "number",
    messge: "Enter your guess number(Limit number from 1 to 5):",

    },
]);

if (answer.userGuessNumber === randomNumber){
console.log("Congratulation ! You guess a correct number.");
}
else{
    console.log("Sorry, you guessing a wrong number");
}