const path = require('path');

// TODO: Use path.join to join two file path segments
if(process.argv.length !== 4){
    console.error(`Usage: node main.js <pathSegment1> <pathSegment2>`);
    process.exit(1);
}
// get the file path segments from command-line arguments
const pathSegment1 = process.argv[2];
const pathSegment2 = process.argv[3];

// join the path segments
const joinedPath = path.join(pathSegment1, pathSegment2);
// TODO: Print the resulting path to the console
console.log(joinedPath);
