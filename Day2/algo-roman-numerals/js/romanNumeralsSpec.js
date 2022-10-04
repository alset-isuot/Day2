var rn = require("./romanNumerals");

//testing of function toRoman
console.log(rn.toRoman(1) === 'I');
console.log(rn.toRoman(3) === 'III');
console.log(rn.toRoman(4) === 'IIII'); 

console.log(rn.toRoman(300) === 'CCC'); // 100+100+100 = 300
console.log(rn.toRoman(123) === 'CXXIII');
console.log(rn.toRoman(2400) === 'MMCCCC');
console.log(rn.toRoman(939) === 'DCCCCXXXVIIII');
