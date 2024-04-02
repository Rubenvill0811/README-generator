const fs = require("fs");


function docCompiler(answer) {
    return `
    This document was written by ${answer.author}
    
    
    `
}

module.exports = docCompiler