#! /usr/bin/env node

console.log(`*******************************`);
console.log(`-----NUMBER GUESSING GAME-----`);
console.log(`*******************************`);
import inquirer from "inquirer";
async function main() {
    let computer = Math.floor(Math.random() * 10) + 1;
    let questions = [{
            type: 'input',
            name: 'Guessed_Number',
            message: 'Guess a number between 1 - 10: '
        }];
    let Score = [];
    for (let i = 0; i < 3;) {
        console.log(`========================================`);
        let answerInput = await inquirer.prompt(questions);
        let userGuess = parseInt(answerInput.Guessed_Number);
        if (userGuess < 1 || userGuess > 10) {
            console.log(`Please guess a number from 1 - 10`);
        }
        else {
            if (userGuess === computer) {
                console.log(`
            User_guess : ${userGuess}
            Computer_generated_Number : ${computer}
            Congrats! Your are the Winner
            You earn "10" Points`);
                Score.push(10);
            }
            else {
                console.log(`
            User_guess : ${userGuess}
            Computer_generated_Number : ${computer}
            Sorry! You Loose
            You earn "0" Points`);
                Score.push(0);
            }
            i++;
        }
    }
    let sum = 0;
    for (let s of Score) {
        sum += s;
    }
    console.log(`==============================`);
    console.log(`Score_Board : 
1st_Attempt_Score ${Score[0]}
2nd_Attempt_Score ${Score[1]}
3rd_Attempt_Score ${Score[2]}
Total Score : ${sum}`);
    console.log(`==============================`);
}
main();
