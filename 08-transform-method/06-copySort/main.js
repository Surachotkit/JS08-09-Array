let arr = ['React', 'Vue', 'Angular'];


const copySorted = (arr) =>{
    arr.sort((a,b) => a-b)
    arr.sort()
    return arr
}
console.log(arr); // React, Vue, Angular (no changes)
let sorted = copySorted(arr);
console.log(sorted); // Angular, React, Vue