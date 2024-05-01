#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 12345;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number"
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAnwer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Checkbalance", "Fastcash"]
        }
    ]);
    console.log(operationAnwer);
    if (operationAnwer.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }]);
        // Sir HomeWork
        if (amountAnswer.amount > myBalance)
            console.log("Insufficient balance");
        // = , -= , += Assign Operator
        else {
            myBalance -= amountAnswer.amount;
            console.log(`${amountAnswer.amount} Withdraw Successfully`);
        }
        console.log("Your remaining balance is :" + myBalance);
    }
    else if (operationAnwer.operation === "Checkbalance") {
        console.log("Your balance is :" + myBalance);
    }
    // Sir Homework 
    else if (operationAnwer.operation === "Fastcash") {
        let amountFast = await inquirer.prompt({
            name: "Cash",
            message: "Enter your amount",
            type: "list",
            choices: ["2000", "5000", "10000", "15000"]
        });
        myBalance -= amountFast.Cash;
        console.log("Your remaining balance is :" + myBalance);
    }
}
else {
    console.log("Invalid Pin");
}
