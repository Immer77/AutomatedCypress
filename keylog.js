const fs = require('fs');
const util = require('util');

/** 
* Logging keys
*/

let input = document.getElementById('inputtext');
let log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
let log_stdout = process.stdout;
input.eventTarget.addEventListener("keydown", (event) => {
   if (event.isComposing || event.keyCode === 229) {
     return;
   }
   log_file.write(util.format(event) + 'Lol\n');
   log_stdout.write(util.format(event) + 'Lollern\n');
});