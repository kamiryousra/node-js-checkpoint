const fs = require("fs");

// Create a file named welcome.txt
fs.writeFileSync("welcome.txt", "Hello Node");

// Read and print the content
const data = fs.readFileSync("welcome.txt", "utf-8");
console.log(data);
