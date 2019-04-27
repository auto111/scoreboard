var o = {p: 42, q: true};
var {q, p, m=1} = o;
// m = 1 : default parameter

console.log(p); // 42
console.log(q); // true
console.log(m); // undefined
