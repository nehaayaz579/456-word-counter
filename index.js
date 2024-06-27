#! /usr/bin/env node
import inquirer from "inquirer";
const Answer = await inquirer.prompt({
    message: "Enter your message to count the words.",
    name: "sentence",
    type: "input",
});
const words = Answer.sentence.trim().split(' ');
console.log(words);
console.log(`Your sentence words count is ${words.length}`);
