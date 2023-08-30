const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

  function updateTask(id,newTask){

      const foundedIndex = tasks.findIndex((obj,index) => obj.id == 2)
      //foundedIndex = 1
      if(foundedIndex != -1){ // ถ้าเจอ
        tasks[foundedIndex].name = "newTask"  //id2  //ไม่ให้อัพพเดท
      } 
  }

 
  updateTask(2,"Travel")
  updateTask(1,"Do Js Hw")
  console.log(tasks);