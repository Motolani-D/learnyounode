const fs = require("fs");
const textLines = undefined;

functiontextLines(callback) {
  fs.readFile(process.argv[2], "utf8", function doneReading(err, fileContents) {
    textLines = fileContents.split("\n").length - 1;
    callback();
  });
}

function logLines() {
  console.log(textLines);
}

function magicNumber() {
  const number = +process.argv[3];
  if (textLines >= number) {
    console.log("This file has " + number + " or more lines");
  } else {
    console.log("This file does not have " + number + " or more lines");
  }
}

getLines(logLines);
getLines(magicNumber);
