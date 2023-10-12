let name = "Hehe";
console.log(name);
console.log(
    'Hello World'
);
let Person = {
    name: 'Farjad',
    Age: 20
};

// We can access the keys in an object by using following Two methods
// >>>By using dot operator
Person.Age = 30;
console.log(Person);

// >>>By using Square brackets 
Person['name'] = 'Ali';
console.log(Person.name);

// to initialize an array or declare it fro the first time 
// we use the following pattern that is described in the following

let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[1]); //similar to other programming languages JavaScript also uses the indices