const fs = require('fs');
const txtRead = fs.readFileSync('./txt_data/read.txt', 'utf-8');

console.log(txtRead);
fs.writeFileSync('./txt_data/write.txt', `${txtRead} - Created By ${Date.now()}`);
console.log('Good Read and write'); // Synchronus - Blocking

fs.appendFileSync('./txt_data/read.txt', 'Hello Write File Node JS');
console.log('Append Success!');
