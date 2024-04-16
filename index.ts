#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

const user_ans: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    tyoe: "input",
    message: "Enter your sentence to count the words : ",
  },
]);

const words = user_ans.Sentence.trim().split("");

console.log(words);

console.log(`Your sentence word count is ${words.length}`);
