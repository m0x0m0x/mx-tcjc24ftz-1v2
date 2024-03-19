// Ch3 Destructuring Arrays
console.log(
  ` %c
========================================================================

⠄⠄⠸⣿⣿⢣⢶⣟⣿⣖⣿⣷⣻⣮⡿⣽⣿⣻⣖⣶⣤⣭⡉⠄⠄⠄⠄⠄
⠄⠄⠄⢹⠣⣛⣣⣭⣭⣭⣁⡛⠻⢽⣿⣿⣿⣿⢻⣿⣿⣿⣽⡧⡄⠄⠄⠄
⠄⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⣌⡛⢿⣽⢘⣿⣷⣿⡻⠏⣛⣀⠄⠄
⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠙⡅⣿⠚⣡⣴⣿⣿⣿⡆⠄
⠄⠄⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⣱⣾⣿⣿⣿⣿⣿⣿⠄ 103: Destructing Arrays
⠄⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⠄  DC = Destructuring
⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠣⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄
⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠑⣿⣮⣝⣛⠿⠿⣿⣿⣿⣿⠄
⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠄⠄⠄⠄⢹⣿⣿⣿⣿⣿⣿⣿⣿⠁⠄
⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠄⠄⠄⠄⠄⠸⣿⣿⣿⣿⣿⡿⢟⣣⣀

=====================================================================
`,
  `color:#DD58D6`
);

console.log(
  ` %c
-----------
1. Start with simple array destructuring
-----------
`,
  "color:#97FFF4;font-size:1rem"
);

// Manaully extracting
const numAr1 = [2, 3, 4];

// One by one
const a = numAr1[0];
const b = numAr1[1];
const c = numAr1[2];

console.table(`
Manual desctruc 
 - ${a}, ${b}, ${c}
`);

// Array Destructuring
console.log("Destructuring with variables");
const [x, y, z] = numAr1;
console.log(x, y, z);

console.log(
  ` %c
-----------
DC Main Obj
-----------
`,
  "color:#97FFF4;font-size:1rem"
);

// Example of an italian restaurant

const restaurant = {
  name: "Woman Juices",
  location: "Sweaty Gym Booties",
  categories: ["Sno", "Far", "Sca", "Pis", "Spi"],
  starterMenu: ["Swea", "Pits", "Pan"],
  mainMenu: ["Jui", "Sti", "Smel"],

  // new additions
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log("Printing it out in table format", "color:green");
console.table(restaurant);
console.log(typeof restaurant);

// Code for looping through object taken from mistral
console.log(
  "%c Using loop to print out all objects",
  "color:yellow;font-style:underline"
);
for (let key in restaurant) {
  // console.log("Method 1");
  console.log(key, ":", restaurant[key]);
  console.table(key, ":", restaurant[key]);
}

// Take only first two elements
console.log("%c Extracting specific elements", "color:yellow");
const [a1, , , b1] = restaurant.categories;
console.log(a1, b1);

// Changine elements in the objects
console.log(
  `
%c Switching variables`,
  "color:yellow"
);
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// Creating  new array inverted , Using DC for switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// DC received two return values from a function
// This is the order function
const [starter, main] = restaurant.order(0, 2);
console.log(starter, main);

// Nested Arrasys
const nestedAr = [2, 3, 4, [6, 7]];

//calling array
// const [i, , , j] = nestedAr;
// console.log(i, j);

// DC inside DC
const [i, , , [j, k]] = nestedAr;
console.log(i, j, k);

// Default values for array

console.log(
  `
%c Default Values in DC of array `,
  "color:yellow"
);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

/* 
106: Destructuring Objects
*/

console.log(
  ` 
  %c 106 - Destructuring Objects
  `,
  "color:orange;font-size:1rem"
);

// New stuff added in the main object

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
