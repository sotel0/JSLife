const fs = require('fs');

// get directory Synchronously
// const files = fs.readdirSync('./');
// console.log(files);

//read directory of this file asynchronously
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log ('Result', files);
});