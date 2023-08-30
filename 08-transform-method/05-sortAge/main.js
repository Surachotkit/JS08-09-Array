const arr = [
    { name: 'John', age: 25 },
    { name: 'Leon', age: 26 },
    { name: 'Mick', age: 29 },
    { name: 'Pete', age: 30 },
    { name: 'Mary', age: 28 }
  ];

const newArr = arr.map((item) => item.age)
console.log(newArr);
newArr.sort((a,b) => a-b)
console.log(newArr);