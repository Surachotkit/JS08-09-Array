const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function deleteTask(id) {
  tasks.filter((obj) => {
    if (obj.id === 1) {
      delete tasks[0]
    }
  });
}

deleteTask();
console.log(tasks);
