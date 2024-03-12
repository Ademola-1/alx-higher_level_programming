#!/usr/bin/node

const integers = process.argv.slice(2).map(Number);

if (integers.length <= 1) {
  console.log(0);
} else {
  const sortedIntegers = integers.sort((a, b) => b - a);
  const secondLargest = sortedIntegers[1];
  console.log(secondLargest);
}
