const arr = [0,1,2,3,4,5]

function clone(newArr){
    newArr = arr.slice()
    return newArr
}

console.log(clone());