console.log(
  ` %c
====================================
Assignments zone
⠀⢀⣠⣴⣶⣦⣄⡀⠀⠀⡀⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⣿⡿⣷⢿⣿⠹⡹⣆⠀⢻⡟⠛⡢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣛⡄⢿⣿⠙⠃⠀⣿⡄⠈⠉⠣⣀⡍⠀⢄⢀⣴⣄⠀⠀⠀⠀⠀⠀
⢻⣿⣷⣿⢿⡄⠀⠠⠼⠃⡤⠴⠌⡀⢈⠔⠈⠀⠀⠀⠙⢄⠀⠀⠀⠀
⠸⢿⣷⣭⠟⠎⠂⠀⣠⣮⢂⡀⣀⠜⠁⠀⠀⠀⠀⠀⠀⠈⡄⠀⠀⠀
⠀⢸⢿⣿⣦⡀⠀⠈⠻⡅⠈⠀⢀⠠⠤⠀⡀⠀⠀⠀⠀⡰⡄⠀⠀⢀
⠀⠀⠠⠛⣉⡍⡠⠄⠊⠁⠒⠈⣠⣄⡀⠀⠀⠰⠒⠐⠬⢖⡁⠀⠀⣸
⠀⢰⡖⠊⠉⠁⠀⠀⠀⠁⠀⠀⣿⣿⠇⠀⠀⠀⢁⠀⠒⠀⠈⠒⠤⡟
⠀⠀⠇⠀⠀⠀⠀⠦⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⠀⠀⠀⠀⠀⠀⡇
⠀⠀⠀⢄⠀⠀⠀⠜⡀⠠⡀⠀⠀⠀⠀⠀⢀⠔⠀⠀⠀⠀⠀⠀⠀⠇
⠀⠀⠀⠀⠑⠄⠀⠀⠈⠃⠘⠒⠂⠤⠤⢐⣀⣀⠀⠀⠀⠀⠀⠀⠀⢰
⠀⠀⠀⠀⠀⠈⠢⡀⠀⠐⡀⠀⠀⠀⠀⠀⠀⠀⠉⠢⢀⠀⠀⠀⠀⠀
=====================================
`,
  "color:#F72798"
);

// ==== Importing object ====

import books from "./assmain.js";

// ============================

console.log(` %c Section 1`, "color:yellow;font-size:2rem");

/*
1.1﻿
Destructure the books array into two variables called firstBook and secondBook.
*/

console.log(
  ` 
%c 1.1
`,
  "color:orange;font-size:1rem"
);

const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

// This is you destructing
const [buk1, buk2, buk3, buk4, buk5] = books;
console.log(buk1);

console.log(
  ` 
  %c 1.2
  `,
  "color:orange;font-size:1rem"
);

/*
Destructure the books array into a variable called thirdBook. You must skip the first two books.
*/
const [, , thirdBook] = books;
console.log(thirdBook);

/*
1.3﻿
Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
*/
console.log(
  ` 
  %c 1.3
  `,
  "color:orange;font-size:1rem"
);

const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];
console.log(ratings);
// Solution
const [[, rating], [, ratingsCount]] = ratings;
console.table(ratings);
console.log(ratings);

/*
1.4
Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
*/
console.log(
  ` 
  %c 1.4
  `,
  "color:orange;font-size:1rem"
);

// Given
const ratingStars = [63405, 1808];

// My Solution
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.table(ratingStars);
console.log(` fiveStarRatings = ${fiveStarRatings}`);
console.log(` oneStarRatings = ${oneStarRatings}`);
console.log(` threeStarRatings = ${threeStarRatings}`);

/*
========================
Section 2 Starts here 
========================
*/

console.log(` %c Section 2`, "color:yellow;font-size:2rem");

/* 
2.1﻿
Destructure the first book object from the books array into variables called title, author and ISBN.
*/

console.log(
  ` 
  %c 2.1
  `,
  "color:orange;font-size:1rem"
);

const { title, author, isbn } = books[0];
console.log(title, author, isbn);
console.table(title, author, isbn);

/*
2.2﻿
Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
*/

console.log(
  ` 
  %c 2.2
  `,
  "color:orange;font-size:1rem"
);

const { keywords: tags } = books[0];
console.log(tags);
console.log(typeof tags);

/* 
2.3﻿
The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.
*/

console.log(
  ` 
  %c 2.3
  `,
  "color:orange;font-size:1rem"
);

const { language, programmingLanguage = "unknown" } = books[6];
console.log(programmingLanguage);

/*
2.4﻿
Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';
*/

console.log(
  ` 
  %c 2.4
  `,
  "color:orange;font-size:1rem"
);

let bookTitle = "unknown";
let bookAuthor = "unknown";

// Reassignment of the properties with the following code

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(title, author);

/*
2.5﻿
Each book object has a deeply nested rating property as illustrated below:

{
  title: 'Algorithms',
  ...
  thirdParty: {
    goodreads: {
      rating: 4.41,              // <-- HERE
      ratingsCount: 1733,
      reviewsCount: 63,
      fiveStarRatingCount: 976,
      oneStarRatingCount: 13
    }
  }
},

Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

Please do most of the work on the left side of the assignment operator: const ... = books[0];

*/

console.log(
  ` 
  %c 2.5
  `,
  "color:orange;font-size:1rem"
);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

/*
2.6﻿
Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.
*/
console.log(
  ` 
  %c 2.6
  `,
  "color:orange;font-size:1rem"
);

function printBookInfo({ title, author, year = "year unknown" }) {
  console.log(`${title} by ${author}, ${year}`);
}

// You had problems because you were not calling this correctly
printBookInfo({
  title: "Dinko",
  author: "biza",
  year: "1969",
});

// printBookInfo();

// Debugging - Make new object with books
console.log(
  ` 
  %c 2.6 Debugging
  `,
  "color:orange;font-size:1rem"
);
const buku2 = books;
console.table(buku2);
