import colors from "colors";
import inquirer from "inquirer";
import fs from "fs";
import parseAnswers from "./utils/parseAnswers.js";

// Adding some themes for the console
colors.setTheme({
    warn:"yellow",
    danger:"red",
    success:"brightGreen"
})

// Every question we ask
const questions = [
    {
        name: "projectName",
        type: "input",
        message: "What is the name of the project?",
        default:"Project Name"
    },
    {
        name: "shortDescription",
        type: "input",
        message: "Write a short description of the project"
    },
    {
        name: "longDescription",
        type: "input ",
        message: "Write an depth description of the project"
    },
    {
        name: "installationInstructions",
        type: "input",
        message: "Explain how to install the application"
    },
    {
        name: "usageInstructions",
        type: "input",
        message: "Explain how to use the application"
    },
    {
        name: "license",
        type: "list",
        message: "Select your license",
        choices: ["MIT", "GNU_GPL_v3.0", "Apache_2.0", "BSD_3_Clause"], 
    },
    {
        name: "contributing",
        type: "input",
        message: "Explain how to contribute to the project"
    },
    {
        name: "tests",
        type: "input",
        message: "Enter information on tests with your code"
    },
    {
        name: "gitHubUsername",
        type: "input",
        message: "Enter your GitHub username"
    },
    {
        name: "email",
        type: "input",
        message: "Enter your email that you would want people to send questions to"
    }
];

function displayTitle() {
    console.log(" ______     ______     ______     _____        ______   __  __     __     ______    ".yellow);
    console.log("/\\  == \\   /\\  ___\\   /\\  __ \\   /\\  __-.     /\\__  _\\ /\\ \\_\\ \\   /\\ \\   /\\  ___\\   ".yellow);
    console.log("\\ \\  __<   \\ \\  __\\   \\ \\  __ \\  \\ \\ \\/\\ \\    \\/_/\\ \\/ \\ \\  __ \\  \\ \\ \\  \\ \\___  \\  ".yellow);
    console.log(" \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\____-       \\ \\_\\  \\ \\_\\ \\_\\  \\ \\_\\  \\/\\_____\\ ".yellow);
    console.log("  \\/_/ /_/   \\/_____/   \\/_/\\/_/   \\/____/        \\/_/   \\/_/\\/_/   \\/_/   \\/_____/ ".yellow);
}

function writeToFile(fileName, data) {
    const path = `./output/${fileName}`;
    console.log(`Writing content to ${path}...`.warn)

    fs.writeFile(path, data, (err) => {
        if (err) {
            console.log("Error!", err);
        }
    });

    console.log(`Finished writing ${path}`.success)
}

function init() {
    displayTitle();
    // Adds a space between the title and questions
    console.log();

    inquirer.prompt(questions).then((results) => {writeToFile("readme", parseAnswers(results));})
}

init();
