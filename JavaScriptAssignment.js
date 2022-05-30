/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
//Question No3 isVowel
function isVowel(word){
  var word=word.toLowerCase();
  var vowel=(['a','e','i','o','u']);
  for( var i=0;i<=vowel.length;i++){
    if(word!==vowel[i]){
    continue;
  }
    return true
}
    return false
  }
console.log("Expected output is true  " + myFunctionTest(true, isVowel('u')));
console.log("Expected output is false  " + myFunctionTest(false, isVowel('b')));
//Question No4 sum of array element
function sumElement(s1){
  let sum=0;
  for(let i=0;i<s1.length;++i){
sum+=s1[i];
  }
  return sum;
}
console.log("Expected output of sum of array element(1,2,3,4) is 10  " + myFunctionTest(10, sumElement([1,2,3,4])));
  //Question No4 Product of array element
    function productOfElement(s1){
      let pro=1;
      for(let i=0;i<s1.length;++i){
    pro*=s1[i];
      }
      return pro;
    }
console.log("Expected output of product of array element(1,2,3,4) is 24  " + myFunctionTest(24, productOfElement([1,2,3,4])));
  //Question No5 Reversing a string
  function reverse(string){
    var word='';
    for(var i=string.length-1;i>=0;i--){
      word+=string[i];
      continue
    }
    return word.toLowerCase();
  }
 console.log("Expected output of reversing a 'jag testar' is 'ratset gaj'  " + myFunctionTest('ratset gaj', reverse("jag testar")));
 
 //Question No 8a Elements multiplied by 10
  
  const g = a.map(function(elem, i, array) {
    return elem * 10;})
    console.log( g)
    
    //Question No 8b Element which is equal to 3
      const h = a.filter(function(elem, i, array){
        return elem == 3;})
        console.log(h)
          
        //Question No8c Product of all array element 
          const j = a.reduce(function(accumulator, elem){
            return accumulator * elem;}, 1);
            console.log( j)


  
  

  