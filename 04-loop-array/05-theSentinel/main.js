let arr = []
let putNumber;
let sum = 0
let start = true

while(start){
    putNumber = +prompt("Enter input") 
    arr.push(putNumber)
    sum = sum + Number(putNumber)
    console.log("array :",arr);
    if(putNumber === 0 || putNumber === null || isNaN(putNumber) ){
        start = false
        console.log("result :",sum);
    }
}


