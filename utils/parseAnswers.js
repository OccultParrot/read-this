function addSectionIfExists(array, sectionName, sectionContent) {
    if (sectionContent)
        array.push({sectionName: sectionName, sectionContent: sectionContent});
    else
        console.log(`No ${sectionName}.`.warn);
}

function parseListAnswer(answer) {
    const name = answer.sectionName
    const content = answer.sectionContent.split(", ");

    let value = `## ${name}\n`;
    
    for (const item of content) {
        value += item;
    }
    value += "\n";

    return value;
}

function parseAnswers(results) {
    const contentsArray = [];

    addSectionIfExists(contentsArray, "Description", results.longDescription);
    addSectionIfExists(contentsArray, "License", results.license)
    addSectionIfExists(contentsArray, "Installation", results.installationInstructions);
    addSectionIfExists(contentsArray, "Usage", results.usageInstructions);
    addSectionIfExists(contentsArray, "Contributing", results.contributing);
    addSectionIfExists(contentsArray, "Tests", results.tests)
    addSectionIfExists(contentsArray, "Questions", `[Link to my GitHubAccount](https://github.com/${results.gitHubUsername})\n\nHave questions? Reach out to me at ${results.email}`)

    const a = "";
    a.replace()
    let outputString =
    `# ${results.projectName}

!(${results.license} badge)[https://img.shields.io/badge/license-${results.license.replace(" ", "_")}-green]

${results.shortDescription}

# Table of Contents
`;
    contentsArray.forEach((content) => {
        outputString += ` - [${content.sectionName}](#${content.sectionName})\n`;
    });
    outputString += "\n";
    
    // Loops through the array of content and writes the title for it, and writes the content after the title
    for (const content of contentsArray) {
        if (content.sectionName == "License")
        {
            outputString += "## License\nTo view license, click [here](LICENSE)\n\n"
        }
        else {
            // I thought the code looked unreadable when I had the ${content.sectionContent} with no tabs, so I used \r to write it at the start of the line
            outputString += `## ${content.sectionName}
            \r${content.sectionContent}\n\n`;
        }
    }

    outputString += "[Generated using Read This](https://github.com/OccultParrot/read-this)"
    console.log(outputString)
    return outputString;
}

export default parseAnswers;