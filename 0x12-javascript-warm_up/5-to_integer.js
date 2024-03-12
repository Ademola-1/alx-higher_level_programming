#!/usr/bin/node

const myArgs = process.argv[2];

if (!isNaN(myArgs)) {
  const number = parseInt(myArgs);
  console.log(`My number: ${number}`);
} else {
  console.log('Not a number');
}
