"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 *
 * isGreaterThan
 * isLessThan
 * isEqualNumber
 * isEqual
 * isNot
 * calcAbs
 * calcCube
 * isTypeMatch
 * findLongestString
 * isFactor
 */
// #1
function isGreaterThan (num1, num2){
    if(parseFloat( num1) > parseFloat(num2)){
        return true;
    }else{
        return false;
    }
}

// #2
function isLessThan (num1, num2){
    if(parseFloat( num2) > parseFloat(num1)){
        return true;
    }else{
        return false;
    }
}
// #3
function isEqualNumber (num1, num2){
    if(parseFloat( num1) === parseFloat(num2)){
        return true;
    }else{
        return false;
    }
}

// #4
function isEqual (input1 , input2){
    if(input1 === input2){
        return true;
    }else{
        return false;
    }
}

// #5
function isNot (input){
    if(input === null){
        return false;
    }else{
        return !input;
    }
}

// #6
function calcAbs (number){
    parseFloat(number);
    if(typeof (number) !== 'number'){
        return 0;
    }else if(number <0){
        return -number;
    }else{
        return number;
    }
}

// #7
function calcCube (number){
    if(typeof (number) !== 'number'){
        return 0;
    }else{
        return number*number*number;
    }
}

//#8
function isTypeMatch (input1, input2){
    if (typeof (input1) === typeof (input2)){
        return true;
    }else{
        return false;
    }
}

//#9 - v1 : turn inputs into string & compare the length if one if the input !== string

// function findLongestString (input1, input2){
//     let inputS1 = input1, inputS2 = input2, string1, string2, result;
//
//     if(typeof(inputS1)!=='string' && typeof (inputS2) !=='string') {
//         return "";
//     }else if(typeof(inputS1)!=='string' || typeof(inputS2) !=='string'){
//         string1 = inputS1.toString();
//         string2 = inputS2.toString();
//         // console.log(string1);
//         // console.log(string2);
//         const compare = string1.length > string2.length ? string1 : string2;
//         // console.log(compare);
//         result = compare;
//     }else if(inputS1.length > inputS2.length){
//         result = inputS1;
//     }else if(inputS1.length < inputS2.length){
//         result = inputS2;
//     }
//     return result
// }


//#9 - v2 : return false if one of the inputs !== string

function findLongestString (input1, input2){
    let inputS1 = input1, inputS2 = input2, result;

    if(typeof(inputS1)!=='string' && typeof (inputS2) !=='string') {
        return "";
    }else if(typeof(inputS1)!=='string' || typeof(inputS2) !=='string'){
        // console.log(string1);
        // console.log(string2);
        const compare = typeof(inputS1) ==='string' ? inputS1 : inputS2;
        // console.log(compare);
        result = compare;
    }else if(inputS1.length > inputS2.length){
        result = inputS1;
    }else if(inputS1.length < inputS2.length){
        result = inputS2;
    }
    return result
}

//#10
function isFactor (number1, number2) {
    let num1 = parseFloat( number1), num2 = parseFloat( number2);

    if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        // console.log(num1);
        // console.log(num2);
       return false;
    }else if(num2 % num1===0 && num1 < num2){
        return true;
    }else{
        return false;
    }
}
console.log( isFactor(3,9));


