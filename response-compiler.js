const fs = require("fs");


function docCompiler(answer) {
    return `
# ${answer.title}       

## Description
${answer.description}

### License
![Static Badge](https://img.shields.io/badge/License-${answer.license}-white?style=plastic)



## Table of Contents
- Installation
- Dependancies
- Usage
- Contribution
- Tests
- Contact me

## Installation
${answer.installation}

### Depedencies 
${answer.dependencies}

## Usage
${answer.usage}
## Contribution
${answer.contribution}
## Tests
${answer.tests}
# Contact Me 
### GitHub
![Static Badge](https://img.shields.io/badge/GitHub-${answer.github}-white?style=for-the-badge&logo=GitHub)

### Email me
![Static Badge](https://img.shields.io/badge/Email-${answer.emailUser}%40${answer.emailPro}-white?style=for-the-badge&logo=gmail)

### Find me on LinkedIn
![Static Badge](https://img.shields.io/badge/LinkedIn-${answer.linkedin}-white?style=for-the-badge&logo=LinkedIn)

    
    
    `
}

module.exports = docCompiler
