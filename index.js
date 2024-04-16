#! /usr/bin/env node
import inquirer from "inquirer";
const user_ans = await inquirer.prompt([
    {
        name: "Sentence",
        tyoe: "input",
        message: "Enter your sentence to count the words : ",
    }
]);
const words = user_ans.Sentence.trim().split("");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
