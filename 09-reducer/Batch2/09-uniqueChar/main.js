let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];


const result = alphabets.reduce((acc,char)=>{
    // acc.push(char);
    // ถ้า character ตัวนั้นอยู่ใน acc แล้ว ไม่ต้อง push
    // ถ้าไม่มี character นั้นอยู่ใน acc => push


    // char == 'b'
    // acc = ['a','b']

    //SEARCH
    let found = false;
    for(let c of acc){
        if(c == char) found = true

    }
    //ACTION
    if(!found)  //ถ้าไม่มีอยู่ ให้ push เข้าไป
    acc.push(char)
    // console.log(acc);
    //RETURN
    return acc
},[])
console.log(result);
// ['a','b']

const set = new Set(alphabets) 
console.log(set);

const newArr = new Array(...set)
console.log(newArr);