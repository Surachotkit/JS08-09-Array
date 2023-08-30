const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  const result = tasks.indexOf( p => p.id === 2)
  console.log(result);