const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// console.log(sum);

const resultArr = []
// for(let index in alphabets){
//     // console.log(index,alphabets[index]);
//     if(alphabets[index] === 'a') resultArr.push(index)
// }

// console.log(resultArr);

// alphabets.forEach((char,index) => {
//     if(char === 'a') resultArr.push(+index)
// })

// console.log(resultArr);

alphabets.findIndex((char,index) => {
    if(char === 'a') resultArr.push(index)
})

console.log(resultArr);
