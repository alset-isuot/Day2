// Note: this code is from youtube lecture video

/*
I -> 1
V -> 5
X -> 10
L -> 50
C -> 100
D -> 500
M -> 1000

// If a smaller number appears before a larger number, 
// you must subtract the smaller one. Here's a list for you:

IV -> 4
IX -> 9
XIV -> 14
XLIV -> 44
CMXLIV -> 944

// Sample output:

to_roman(4) # 'IV'
to_roman(944) # 'CMXLIV'
to_roman(150) # CL
*/

// exports mechanism where we can create items
// subbed out function function(num)
// 1. Write a method TO_ROMAN, TO_ROMAN takes in INPUT_NUMBER (an arabic number)

//Simple roman conversion
/*
const decimalToRoman = [ //array with objects nested within it; need order by greatest values to least, need to check number in this order
{1000: 'M'},  //M -> 1000
{500: 'D'},  //D -> 500
{100: 'C'},  //C -> 100
{50: 'L'},   //L -> 50
{10: 'X'},   //X -> 10
{5: 'V'},    //V -> 5
{1: 'I'}    //I -> 1
]
*/

const decimalToRomanModern = [ //array with objects nested within it; need order by greatest values to least, need to check number in this order
{1000: 'M'},  //M -> 1000
{900: 'CM'},  //CM -> 1000-100 = 900 
{500: 'D'},  //D -> 500
{400: 'CD'},  //CD -> 500-100 = 400
{100: 'C'},  //C -> 100
{90: 'XC'},  //XC -> 100-10 = 90
{50: 'L'},   //L -> 50
{40: 'XL'},   //XL -> 50 -10 = 40
{10: 'X'},   //X -> 10
{9: 'IX'},   //IX -> 10 -1 = 9
{5: 'V'},    //V -> 5
{4: 'IV'},    //V -> 5 -1 = 4
{1: 'I'}    //I -> 1
]


exports.toRoman = function(num) {
// idea of algorithm
/*    
    // 2. Create a OUTPUT string, set to ''
    //let romanStr = ''

    // simple case:
    // 43=> 10(4)+3 -> (4)10s + (3)1s
    
    // 10s increments
    //let result = num / inc10[0]    // result equals num divided by 10
    inc10 = [ 10, "X" ] //list[], value, string representation  
    let result = Math.floor(num / inc10[0])                                     // Math.floor will give the whole number part of result
    console.log(result)

    for (let i =0; i < result; i++){
        //romanStr += inc10[1]
    }
    //console.log(romanStr)

    num1s = num % inc10[0]

    // 1s increments
    //let result = num / inc10[0]    // result equals num divided by 1
    inc1 = [ 1, "I" ]  
    result = Math.floor(num1s / inc1[0]) // Math.floor will give the whole number part of result
    console.log(result)

    for (let i =0; i < result; i++){
        //romanStr += inc1[1]
    }

    // 3. Create a ROMAN_NUMERAL_TO_ARABIC_MAP that includes roman numerals as keys, arabic numbers as values
    // 4. Iterate over ROMAN_NUMERAL_TO_ARABIC_MAP, keep track of ROMAN_NUMERAL and ARABIC_NUMBER
    // 5. Set EVENLY_DIVISIBLE_TIMES = INPUT_NUMBER / ARABIC_NUMBER:
    // 6. If EVENLY_DIVISIBLE_TIMES >= 1
    // 6a. Append ROMAN_NUMERAL to OUTPUT EVENLY_DIVISIBLE_TIMES
    // 6b. Subtract ARABIC_NUMBER from INPUT_NUMBER EVENLY_DIVISIBLE_TIMES

    // 7. Return OUTPUT
    //console.log(romanStr)
*/


    
let romanStr = ""
/* NOTE: 
for..in : iterates over all enumerable property keys of an object
for..of : iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.*/  
    for (let obj of decimalToRomanModern) { //use OF not IN for arrays to go over all key values of object
         
        let inc = Object.keys(obj)[0]
        let roman = obj[inc]
        //console.log(inc) //used to check values
        //console.log(obj[inc]) //used to check values

        let result = Math.floor(num / inc)
        //console.log(result) //testing

        for (let i = 0; i < result; i++){
            romanStr += roman
        }
        //console.log(romanStr) //testing

        num = num % inc // updates the number to only have to remainder of the number, for example 1001 would take 100 out for 'M', leaving 1 as a remainder
    
        if (num == 0){ //if num has no more remainder, number has eben converted to roman
            break // exits loop
        }
    }

    //console.log(romanStr) //testing
    return romanStr
};

//exports.toRoman(683) //testing