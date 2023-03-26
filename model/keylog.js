const fs = require('fs');
const util = require('util');

/** 
* Logging keys
*/

function logToFile(data, filename){
    try {
        let log_file = fs.createWriteStream(__dirname + `/${filename}.log`, {flags : 'w'});
        let log_stdout = process.stdout;

        log_file.write(util.format(data) + '\n');
        log_stdout.write(util.format(data) + '\n');
    } catch (error) {
        return new Error("File does not exists")
    }
}

module.exports = {logToFile};

