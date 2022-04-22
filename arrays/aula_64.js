const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7,8,9], 'Jeff');

console.log(a3);

const a4 = [...a1,'Jeff', ...a2, ...[10,11,12]];
console.log(a4);