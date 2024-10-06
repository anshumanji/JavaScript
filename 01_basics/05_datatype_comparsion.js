console.log("">1);
console.log("2">1);

console.log(null>0);
console.log(null===0);
console.log(null>=0);



console.log(undefined>0)
console.log(undefined===0)
console.log(undefined>=0)

//the reason is that equality check comparison converts null to a number treating it as zero 


//difference between == and ===
let a = "1"
let b = 1
console.log(a==b) //op: true

console.log(a===b) //op: false
// In JavaScript, equality operators like double equals (==) and triple equals (===) are used to compare two values. But both operators do different jobs. Double equals (==) will try to convert the values to the same data type and then try to compare them. But triple equals (===) strictly compares the value and the datatype.

// == concerned only to value 
// === concerned to value and DT both