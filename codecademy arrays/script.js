//Assignment 1
const hobbies = ['bop', 'boop', 'beep']

console.log(hobbies)

//Assignment 2
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

var listItem = famousSayings[0]

console.log(listItem)

console.log(famousSayings[2])

console.log(famousSayings[3])

//Assignment 3
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

//Assignment 4
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo'];

console.log(condiments);

utensils[3] = 'Spoon';

console.log(utensils);

//Assignment 5
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];


console.log(objectives.length);

//Assignment 6
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('mow lawn', 'take down a dictatorship')

console.log(chores)

//Assignment 7
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop()

console.log(chores)

//Assignment 8
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

//Assignment 9
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr){
  newArr.pop()
}

removeElement(concept)

console.log(concept)

//Assignment 10
const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];