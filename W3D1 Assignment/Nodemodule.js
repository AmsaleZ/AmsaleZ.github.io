var modTest=require('../W3D1 Assignment/NodeAssig.js')

let array=[8,5,4,12,16,12];
let objArray={a:1,b:[1,2],c:"string",d:{x:1,y:2}};
let arrayOldYoung=[{name:'Ram',age:20},{name:'Lakshman',age:15}]

console.log("Even array",modTest.findEven(array));
console.log("Odd array",modTest.findOdd(array));
console.log("Even Sum",modTest.sumOfEven(array));
console.log("Unique array",modTest.uniqueArray(array));
console.log("Array Element Type",modTest.elementTypes([50,"apple",{a:1}]));
console.log("Destructure Array",modTest.DestructureArray([50,"apple",{a:1}]));
console.log("Index Of Array",modTest.IndexOfOdd(array));
console.log("String to Array",modTest.StringToArray("computer"));
console.log("String to Array",modTest.ArrayToString(['computer']));
console.log("Object to Array",modTest.ConvertObjectToArray(objArray));
console.log("Oldest Person is ",modTest.FindOldestPerson(arrayOldYoung));
console.log("Youngest age ",modTest.FindYoungestAge(arrayOldYoung));
console.log("Younger list",modTest.FindYounger(arrayOldYoung));