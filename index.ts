#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const user_ans: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    tyoe: "input",
    message: chalk.blue("Enter your sentence to count the words : "),
  },
]);

const words = user_ans.Sentence.trim().split(" ");

console.log(chalk.green(words));

console.log(chalk.yellow(`Your sentence word count is ${words.length}`));

console.log(chalk.red("THANK YOU FOR USING WORD COUNTER"));

