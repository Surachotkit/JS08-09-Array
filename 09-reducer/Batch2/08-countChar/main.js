let str = 'I live in Thailand';
let newArr = {}
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
let newStr = str.toLowerCase().split(' ').join('')
console.log(newStr);

for(let num of newStr) {
    newArr[num] = newArr.hasOwnProperty(num) ? newArr[num] + 1 : 1;
}
console.log(newArr);


// const newItem = newStr.reduce((item =>{
//     // newArr[item] = newArr.hasOwnProperty(item) ? newArr[item] + 1 : 1;
//     console.log(item);
//     return item
// }),{})
// newItem()

