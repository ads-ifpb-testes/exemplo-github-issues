function find(...nums) {
  let smallest = Number.MAX_VALUE;
  let largest = Number.MIN_VALUE;
  for (const n of nums) {
    if (n < smallest) smallest = n;
    if (n > largest) largest = n;
  }
  return [smallest, largest];
}

console.log(find(4, 25, 7, 9)); // Dá certo
console.log(find(4, 3, 2, 1)); // Não dá certo
