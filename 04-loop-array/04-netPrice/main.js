const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];
  
  const summary = [
    { netPrice: 900 }, 
    { netPrice: 475 },
    { netPrice: 100 }
  ];
  
// sales = [obj1,obj2,obj3]

const newArr = []
// // #1 : เอาข้อมูลครบ loop
// for(let productObj of sales){ // let สามารถตั้งชื่ออะไรก็ได้ สื่อความหมาย
//     // each item = Object
//     // each Object => dot, bracket
//     // access Object => dot, bracket
//     //logic
//     let price = productObj.price
//     let discount = productObj.discount
//     let netPrice;
//     if(discount){
//         netPrice = price * (1-discount)
//     }else{
//         netPrice = price
//     }
//     //create new Array and Object
//     const newObj = {netPrice: netPrice}
//     newArr.push(newObj)

//     // console.log(price, discount , netPrice);
// }
// console.log(newArr);
// console.log(sales);


// const newArr = []
// // obj = { price: 1000, discount: 0.1}
// sales.forEach((obj)=>{
// 	//calc NewPrice
// let newPrice = obj.price * (1 - (obj.discount || 0))
// newArr.push({newPrice})
// })
// console.log(sales)
// console.log(newArr)

// sales = [{price:    , discount:    }, {}, {}]
// push ของใหม่ เข้าไป {} 
sales.forEach((obj) => newArr.push ({newPrice: obj.price * (1 - (obj.discount || 0)) }))
console.log(sales)
console.log(newArr)