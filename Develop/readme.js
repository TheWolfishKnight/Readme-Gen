const inquirer = require("inquirer");
const fs = require("fs");

let selectedLicense;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "description",
      message: "Give a description of your project.",
    },
    {
      type: "input",
      name: "install",
      message: "Please provide installation instructions",
    },
    {
      type: "input",
      name: "useInfo",
      message: "Please provide any usage info",
    },
    {
      type: "input",
      name: "contribute",
      message: "Please provide any contribution guidelines.",
    },
    {
      type: "input",
      name: "test",
      message: "Please provide instructions on testing the app.",
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like to use?",
      choices: [
        "MIT License",
        "Apache License 2.0",
        "GPLv3 License",
        'BSD 2-Clause "Simplified" License',
        "GPLv2 License",
        "LGPLv2.1 License",
        'BSD 3-Clause "New" or "Revised" License',
        "Unlicense",
        "Artistic License 2.0",
        "Eclipse Public License 1.0",
      ],
    },
  ])
  .then((answers) => {
    switch (answers.license) {
      case "MIT License":
        selectedLicense = `The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT).`;
        break;
      case "Apache License 2.0":
        selectedLicense = `The Apache License, Version 2.0 is a free software license.`;
        break;
      case "GPLv3 License":
        selectedLicense = `The GNU General Public License (GPL) is a free, copyleft license used primarily for software.`;
        break;
      case 'BSD 2-Clause "Simplified" License':
        selectedLicense = `The BSD 2-Clause "Simplified" License is a permissive free software license.`;
        break;
      case "GPLv2 License":
        selectedLicense = `The GNU General Public License (GPL) is a free, copyleft license used primarily for software.`;
        break;
      case "LGPLv2.1 License":
        selectedLicense = `The Lesser General Public License (LGPL) is a free-software license published by the Free Software Foundation (FSF).`;
        break;
      case 'BSD 3-Clause "New" or "Revised" License':
        selectedLicense = `The BSD 3-Clause "New" or "Revised" License is a permissive free software license.`;
        break;
      case "Unlicense":
        selectedLicense = `The Unlicense is a license that releases a work into the public domain.`;
        break;
      case "Artistic License 2.0":
        selectedLicense = `The Artistic License 2.0 is a software license that is compatible with the GPL and permits reuse within proprietary software.`;
        break;
      case "Eclipse Public License 1.0":
        selectedLicense = `The Eclipse Public License (EPL) is a free software license used by the Eclipse Foundation for its software.`;
        break;
      default:
        selectedLicense = `Invalid license selected.`;
    }
    console.log(selectedLicense);

    results = `# ${answers.title}
## by ${answers.name}

## Table of Contents
- [Description](#description)
- [Install Instructions](#install-instructions)
- [Usage Info](#usage-info)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Questions](#questions)

## Description
${answers.description}

## Install Instructions
${answers.install}

## Usage Info
${answers.useInfo}

## Contribution Guidelines
${answers.contribute}

## Test Instructions
${answers.test}

## License
This project is licensed under the ${answers.license}:${selectedLicense}

## Questions
If you have any further questions, you can shoot me an email at ${answers.email} or check out my Github page at https://github.com/${answers.github}.`;

    fs.writeFile(`./${answers.title}.md`, results, (error, data) => {
      if (error) {
        console.error(`Could not write file: ${error}`);
        return;
      }
      console.log(`Data: ${data}`);
    });
  });
