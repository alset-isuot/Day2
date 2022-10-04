var rn = require("./romanNumerals");

//Lazy roman
//testing of function toRoman
//console.log(rn.toRoman(1) === 'I');
//console.log(rn.toRoman(3) === 'III');
//console.log(rn.toRoman(4) === 'IIII'); 
//console.log(rn.toRoman(300) === 'CCC'); // 100+100+100 = 300
//console.log(rn.toRoman(123) === 'CXXIII');
//console.log(rn.toRoman(2400) === 'MMCCCC');
//console.log(rn.toRoman(939) === 'DCCCCXXXVIIII');

//Modern Roman
//Will return true if romanNumeral function outputs match === 
console.log(rn.toRoman(1) === 'I');
console.log(rn.toRoman(3) === 'III');
console.log(rn.toRoman(4) === 'IV');
console.log(rn.toRoman(300) === 'CCC');
console.log(rn.toRoman(123) === 'CXXIII');
console.log(rn.toRoman(2400) === 'MMCD');
console.log(rn.toRoman(939) === 'CMXXXIX');