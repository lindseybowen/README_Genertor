const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your the name of your project?',
    },
    {
        type: 'input',
        name:'description',
        message: "Please provide a description of your project.",
    },
    {
        type: 'input',
        name:'url',
        message: "If your project is deployed, please enter its URL. If not, please leave this blank.",
    },
    {
        type: 'input',
        name:'image',
        message: "Please provide an image link of your deployed application.",
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What does a developer need to do to install your project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Describe, who, if anyone, helped or contributed to this project.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'In what ways would you like other developers to contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run an automated test for your application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to assign your application?',
        choices: ['MIT', 'AGPL','GPL']
    },
    {
        type: 'input',
        name: 'questions1',
        message: 'What is your Github username so other developers can contact you with questions?',
    },
    {
        type: 'input',
        name: 'questions2',
        message: 'What is your email so other developers can contact you with questions?',
    }
]).then((response) => {
    console.log(response)
    let badge;
    if(response.license === 'MIT'){
        badge = '[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }else if(response.license === 'AGPL'){
        badge = '[![AGPL](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)';
    }else if(response.license === 'GPL'){
        badge = '[![GPL](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)';
    }
    const data = `
# ${response.name}
${badge}
## Table of Contents
* [Description](#description)
* [URL](#url)
* [Installation](#installation)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description 
${response.description}
## URL
[Click here to see the live site!](${response.url})
![Screenshot Deployed Website](${response.image})
## Installation
${response.installation}
## Credits
${response.usage}
## Contributing
${response.contribution}
## Tests
${response.tests}
## Questions
Please contact me below with any questions you have about the appiction.
* Github: https://github.com/${response.questions1}
* Email: ${response.questions2}
    `
    fs.writeFile('README.md', data, (error) => {

        error ? console.error(error) : console.log('success!')
    })
})
