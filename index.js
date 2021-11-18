function find(...nums) {
  let smallest = Number.MAX_VALUE;
  let largest = Number.MIN_VALUE;
  for (const n of nums) {
    if (n < smallest) smallest = n;
    else if (n > largest) largest = n;
  }
  return [smallest, largest];
}

console.log(find(4, 25, 7, 9));
console.log(find(4, 3, 2, 1));
