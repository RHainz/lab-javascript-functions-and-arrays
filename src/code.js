const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr4) { 
    let sumLetras=0 
    function sumatorio (arr){
        sumLetras+=arr.length;
        console.log(sumLetras);
    }
    arr4.forEach((sumatorio));
    console.log(sumLetras);
    return sumLetras;
}

averageWordLength(wordsArr)


/*
arr2=[1,2,3,4,5];

if(arr2.length==0){
    return null;
}

const media2 = arr2.reduce((a, b) => a + b, 0) / arr2.length;


console.log(media2);
*/


/*
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
let sum=0;

for (let numbers of arr){
    switch(typeof(numbers)){
        case "number":
        case "boolean":
            sum+=numbers;
        break;
        case "string":
            sum+=numbers.length;
        break;
    }
}

console.log(sum)
*/


// numbers.forEach((calc1) => {sum+=calc1});






/*
function findLongestWord(arr) {
    let biggest="";
    if (!arr) {
        ret=null;
        return ret;
    }
    for(let string of arr){
        if (biggest.length<string.length){
            biggest=string;
        }
}
return biggest;
}
// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const words = [];
console.log(findLongestWord(words));*/
