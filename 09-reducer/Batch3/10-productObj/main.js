const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];



const productsObject = products.reduce((accumulator, currentValue) => {
    console.log('acc',accumulator);
    console.log('cur',currentValue);
    console.log('-------------------------------------------------------------');
    accumulator[currentValue.id] = { name: currentValue.name };
    return accumulator;
}, {});

  
console.log(productsObject)

