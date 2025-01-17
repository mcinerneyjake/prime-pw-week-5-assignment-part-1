console.log('***** Object Practice *****');

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
let me = {
  // TODO - add properties here
  firstName: 'Jake',
  lastName: 'McInerney',
  hasSiblings: true,
  shoeCount: 10,
  favThreeFoods: ['mofongo', 'sushi', 'steak'],
};
console.log('A little about me:', me); // DONE

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

const fullName = `${me.firstName} ${me.lastName}`;
console.log('My full name is:', fullName); // DONE

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log('My first favorite food is:', me.favThreeFoods[0]);
console.log('My last favorite food is:', me.favThreeFoods[me.favThreeFoods.length - 1]); // DONE

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log('The number of pairs of shoes I own is:', me.shoeCount);

me.shoeCount += 1;

console.log('The new number of pairs of shoes I own is:', me.shoeCount); // DONE

// I could have set the shoeCount to 11 using this method as well:

// me.shoeCount = 11;

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'orange';
console.log('My favorite color is:', me.favoriteColor);
console.log('My updated object about me:', me); // DONE
