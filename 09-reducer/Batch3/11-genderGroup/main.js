const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];

  const result = persons.reduce((accumulator, currentValue) => {
    console.log('acc',accumulator);
    console.log('cur',currentValue);
    console.log('---------------------------------------------');
    if (!accumulator[currentValue.sex]) {
      accumulator[currentValue.sex] = [];
    }
    accumulator[currentValue.sex].push(currentValue.name);
    return accumulator;
  }, {});
  
  console.log(result);

  
