let animals = ["Dog","Cat","Rat"]
animals.push("Fish")
animals.unshift("Horse")
animals.push("Giraffe","Snake")
// console.log(animals);
animals.shift("Horse")
animals.pop("Snake")
animals.shift("Dog")
console.log(animals); //[ 'Cat', 'Rat', 'Fish', 'Giraffe' ]

