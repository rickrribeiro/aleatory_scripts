function add(num1, num2){
    return num1+num2;
}

function getArray(){
    const array = [1,2,3]
    return array
}

// function addValueToConstant(num2){
//     let num1 = 5;
//     num1+=num2
//     return num1;
// }

function blockStatement1(){
    console.log("Block1");
}

// function blockStatement2(){
//     blockStatement1()
// }

// function boolean1(){
//     return true
// }

// function boolean2(str1, str2){
//     return str1==str2
// }

// function compare(a, b){
//     if(a>b){
//         return true
//     }else {
//         return false
//     }
// }

function runLoop(a){
  let c = 0;
  for(let i = 0; i< a; i++){
    blockStatement1()
    c++;
  }
  return {
    name: 'runLoop',
    count: c
  }
}


module.exports = {
    add,
    getArray,

    blockStatement1,

    runLoop,
}