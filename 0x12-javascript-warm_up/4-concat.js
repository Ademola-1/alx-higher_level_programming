#!/usr/bin/node

const [args1, args2] = process.argv.slice(2);
if (args2 === undefined) {
  console.log(`${args1} is undefined`);
} else if (args1 === undefined) {
  console.log('undefined is undefined');
} else {
  console.log(`${args1} is ${args2}`);
}
