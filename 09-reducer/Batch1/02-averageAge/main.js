let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

// console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33

const getAverageAge = () =>{

    const result = arr.reduce((acc,item) => {
        console.log(item.age);

        return item.age + acc
    },0)
    // return get
    console.log(result);
    let avg = result/3
    console.log(avg);
    
    
}
getAverageAge()