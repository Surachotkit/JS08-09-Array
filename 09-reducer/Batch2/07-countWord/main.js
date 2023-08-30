let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

// ARRAY = OBJ

const initObj = {}
function reducerFn(acc,name,index,arr){

    // acc === {'Jack'}
    // ยังไม่เคยมีชื่อใน Object --> เพิ่มชื่อเป็น key และ value เป็น 1
    // มีชื่อใน Obj อยู่แล้ว => update value เพิ่มขึ้น 1

    // เช็คว่ามี string jack ยัง --> acc['Jack] === acc[name]
    if(!acc[name]){  //ถ้าไม่ชื่อ key นี้ไม่มีชื่อ jack 
        acc[name] = 1 //ให้เพิ่มม
    }else{
        acc[name]++ 
    }
    return acc
}
const r = names.reduce(reducerFn, initObj)
console.log(r);
// name.reduce(reducerFn,initObj)