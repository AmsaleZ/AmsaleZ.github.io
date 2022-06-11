let array=[8,5,4,12,16,12];
// to find Array of even
function even(array){
    let evenArr=[]
   for( let i=0;i<array.length;i++){
        if(array[i]%2 == 0)
            evenArr.push(array[i])
    }
    return evenArr;
}
console.log(even(array))

// to find Array of odd
function odd(array){
    let oddArr=[]
    for( let i=0;i<array.length;i++){
        if(array[i]%2 == 1)
            oddArr.push(array[i])
    }
    return oddArr;
}
console.log(odd(array))

// evenSum
function evenSum(array){
  let evensum=0;
    for( let i=0;i<array.length;i++){
        if(array[i]%4==0){
      evensum+=array[i];
                   }
                }
    return evensum;
}
console.log(evenSum(array))

//Unique numbers
function unique(array){
    let temp=[];
    if(array.length>0)
    temp.push(array[0]);
    for( let i=0;i<array.length;i++){
        if(temp.indexOf(array[i])<0){
      temp.push(array[i])
                   }
                }
                return temp;
}
console.log(unique(array))

//getTypes
function getTypes(array){
    let result=[];
    for( let i=0;i<array.length;i++){
        result.push(typeof(array[i]));
    }
    return result;
}
console.log(getTypes([50,"apple",{a:1}]));

//Destructure Array
function destructureArray(array){
    let result={};
    let resultd=""
    for( let i = 0 ; i < array.length; i++){
         resultd= typeof array[i] + i
        result[resultd] = array[i];
    }
    return result;
}
    console.log(destructureArray([50,"apple",{a:1}]));

    //Index of first odd
function indexOfOdd(array){
for(let i=0;i<array.length;i++){
    if(array[i]%2==1)
    return i;
}
}
console.log(indexOfOdd(array));

//converting String to Array
let inString="computer";
function strToArray(inString){
    let arr=[];
    for(let i=0;i<inString.length;i++){
        arr.push(inString.charAt(i))
    }
    return arr;
    // let strArray=[];
    // let tempStr="";
    // for( let i=0;i<inString.length;i++){
    //     if(inString.charAt(i)==''){
    //         strArray.push(tempStr);
    //         tempStr=" ";
    //         continue;
    //     }
    //     tempStr+=inString.charAt(i);
    // }
    // strArray.push(tempStr);
    // return strArray
}
console.log(strToArray(inString))

//Array to String
let inArr=['computer']
function arrayToString(inArr){
    let word=""
    for(let i=0;i<inArr.length;i++){
        word+=inArr[i];
    }
    return word;
}
console.log(arrayToString(inArr))

//converting Object to String
let objArray={a:1,b:[1,2],c:"string",d:{x:1,y:2}};
function convertObjectToArray(objArray){
let tempArr=[];
for( const keys in objArray){
    let begin=objArray[keys];
    if(typeof begin!="object"){
    tempArr.push(keys+begin);
}else if(Array.isArray(begin)){
    tempArr.push(keys+convertObjectToArray(begin))
}else if(typeof begin=="object"){
    let joinThem="";
    joinThem+=keys;
    iteratingObject(tempArr,joinThem,begin)
}
}
return tempArr;
}
console.log(convertObjectToArray(objArray));


function iteratingObject(temp, joinThem, begin) {
    let condition = true;
    for (const key in begin) {
        let ownKey = joinThem + key;
        let ownValue = begin[key];
        if (typeof ownValue != "object") {
            temp.push(ownKey + ownValue)
        } else {
            condition = true;
            while (condition) {
                iteratingObject(temp, ownKey, ownValue);
            }
        }
    }
}

let arrayOldYoung=[{name:'Ram',age:20},{name:'Lakshman',age:15}]
function findOldestPerson(arrayOldYoung) {
    let maxAge= -Infinity;
    for(let objmax of arrayOldYoung){
        for(let key in objmax){
            if(maxAge<objmax.age)
            maxAge=objmax.age;
        }
        return objmax.name;
    }
// let temp = {};
//  for (let i = 0; i < arrayOldYoung.length; i++) {
//         let item = arrayOldYoung[i];
//         let isObject = (typeof item == "object");
//  if (i == 0) {
//             for (const key in item) {
//                 temp[key] = item[key];
//             }
//         } else {
       
//             if (temp.age < item.age) {
//                 for (const key in item) {
//                     temp[key] = item[key];
//                 }
//             }
//         }
//     }
// return temp.name ;
}
console.log(findOldestPerson(arrayOldYoung))


function findYoungestAge(arrayOldYoung) {
    let minAge= +Infinity;
    for(let objmin of arrayOldYoung){
        for(let key in objmin){
            if(objmin.age<minAge)
            minAge= objmin.age;
         }
    return objmin.age;  
    }
//  let temp = {};
// for (let i = 0; i < arrayOldYoung.length; i++) {
//         let item = arrayOldYoung[i];
//         let isObject = (typeof item == "object");
// if (i == 0) {
//             for (const key in item) {
//                 temp[key] = item[key];
//             }
//         } else {
//             if (temp.age > item.age) {
//                 for (const key in item) {
//                     temp[key] = item[key];
//                 }
//             }
//         }
//     }
// return temp.age;
}
console.log(findYoungestAge(arrayOldYoung))


function findYounger(arrayOldYoung) {
    for(let objY of arrayOldYoung){
        for(let key in objY){
            if(objY.age>14 && objY.age<17)
            return objY.name;
        }
        
    }
// let list = [];
//     for (let i = 0; i < arrayOldYoung.length; i++) {
//         let obj = arrayOldYoung[i];
//        if (obj.age > 14 && obj.age < 17) {
//             let temp = {};
//             for (let key in obj) {
//                 temp[key] = obj[key];
//             }
//            list.push(temp);
//         }
//     }
//  return list;
}
console.log(findYounger(arrayOldYoung))


module.exports={findEven:even,findOdd:odd,sumOfEven:evenSum,uniqueArray:unique,
    elementTypes:getTypes,DestructureArray:destructureArray,IndexOfOdd:indexOfOdd,
    StringToArray:strToArray,ArrayToString:arrayToString,ConvertObjectToArray:convertObjectToArray,FindOldestPerson:findOldestPerson,
    FindYoungestAge:findYoungestAge,FindYounger:findYounger}