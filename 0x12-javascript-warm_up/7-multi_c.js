#!/usr/bin/node
const myArr = process.argv[2];
if (!isNaN(myArr)) {
  const convArr = parseInt(myArr);
  for (let i = 0; i < convArr; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
