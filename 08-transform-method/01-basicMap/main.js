// const array = [1, 2, 30, 400];
// const result = array.map(item => item*2)
// console.log(result)

// const array = [1, 2, 3, 4];
// const result = array.map(item => String(item))
// console.log(result);

// const array = [1, '1', 2, {}];
// const result = array.map(item => typeof(item))
// console.log(result);


// const array = ['apple', 'banana', 'orange'];
// const result = array.map(item => item.toUpperCase())
// console.log(result);
// // result: ["APPLE", "BANANA", "ORANGE"]

// const array = [1, 3, 4, 5, 6, 7, 8];
// const result = array.map(item => {
//     if(item %2 === 0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// })
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

// const array = [1, -3, 2, 8, -4, 5];
// const result = array.map(item => {
//     if(item < 0){
//         item * -1
//         console.log(item);
//     }else{
//         item * -1
//         console.log(item);
//     }
// })
// result: [1, 3, 2, 8, 4, 5]

// const array = [100, 200.25, 300.84, 400.3];
// const result = array.map(item => item.toFixed(2))
// console.log(result);
// // result: ["100.00", "200.25", "300.84", "400.30"]

// const array = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
// const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// const result = array.map((item) => month[item])
// //#1 : 0 => month[0] == "Jan"
// console.log(result);

// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]
// const newArray = array.map((n) => Math.sqrt(Math.sqrt(n)))
// console.log(newArray);

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// const newArray = array.map(function(fruitObj){
//     console.log(fruitObj.name);
//     return fruitObj.name
// })
// console.log(newArray);
// // result: ["apple", "banana", "watermelon"]


// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // // result: [14, 18, 32]
// const newArr = array.map((item) => {
//   console.log(item.age);
// })



// const array = [
//   { name: 'apple', surname: 'London' },
//   { name: 'banana', surname: 'Bangkok' },
//   { name: 'watermelon', surname: 'Singapore' }
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]
// const newArr = array.map((item) =>{
//   console.log(item.name + ' ' + item.surname);
// })



// const array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-01' },
//   { name: 'watermelon', birth: '1985-12-01' }
// ];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]



// const newArray = array.map(function(fruitObj){
//     // console.log(fruitObj);
//     const newFruitObj = Object.assign({},fruitObj)
//     const birthYear = +fruitObj.birth.slice(0,4)
//     newFruitObj.age = 2021 - birthYear
//     // console.log(newFruitObj);
//     return newFruitObj
// })
// console.log(newArray);


// const array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-10' },
//   { name: 'watermelon', birth: '1985-12-30' }
// ];
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]

// INPUT (JS-OBJ) : {name : 'apple' , birth: '2000-01-01'}
// OUTPUT (STRING HTML TAG) : <tr><td>apple</td><td>01 Jan 2000</td></tr>
// OBJ => STRING
// const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// const newArray = array.map(function(obj){
//     //ดึงค่า มาก้อน
//     let name = obj.name
//     const day = obj.birth.slice(-2)
//     const monthIndex = obj.birth.slice(-5,-3) -1  //
//     const year = obj.birth.search(0,4)
//     // console.log(day);

//     //create string
//     const resultString = `<tr><td>${name}</td><td>${day} ${month[monthIndex].toLowerCase()} ${year}</td>`
//     return resultString
// })
// console.log(newArray);