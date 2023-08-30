const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];
//   console.log(inventory[2]);
  const result = inventory.find( p => p.name === 'cherries')
  console.log(result);
