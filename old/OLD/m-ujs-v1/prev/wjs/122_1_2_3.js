/*
122: Working with strings Part1
123: Working with strings Part2
124: Working with strings Part3
*/
//=== Import zone
import { mainHead, subHead, paraText } from "./funz.js";
//
mainHead(`
122: Working with strings Part1
123: Working with strings Part2
124: Working with strings Part3
`);

mainHead(`
122: Part 1 Below ⬇️
`);

// Old study section here
subHead("Revision Stuff in this area");
paraText("Quick test of sets");
const airlineSetP = new Set("PantyAir");
console.log(airlineSetP);

// Running initial tests - Airlines Related
subHead("Initial Testing");

// === Main Variables used in whole file
const airlineP = "Pynt Air Sniff";
const planeP = "696";
// ====

console.log(airlineP[1]);
console.log(`
Printing each letter from airlineP which is 'Pynt Air'
Printing each letter - ${airlineP[0]}
Printing each letter - ${airlineP[1]}
Printing each letter - ${airlineP[2]}
Printing each letter - ${airlineP[3]}
`);

paraText("Using Console.Log directrly to print letters");
console.log("jams"[0]);

// My testing
subHead("Loop to prin each letter");
// Doing a simple loop over a string
for (const ltr of airlineP) console.log(ltr);

subHead("Printing the Position Directly");
console.log("booty"[0]);

//length of string
console.log(airlineP.length);
console.log("noia".length);

subHead("String Methods");
paraText("Getting position index");
console.log(airlineP.indexOf("P"));

// lastIndexOf- Counts it in reverse
console.log(airlineP.lastIndexOf(""));

// Searching for entire workds using indexOf -1, not found
console.log(airlineP.indexOf("Air"));

subHead("Extracting Using Slice Method");
console.log(airlineP.slice(4));

// Storing into a variable or Data structure
// here also slicing with begin and end - Slcie right before the index
// End - beginning , length
let mySlice = airlineP.slice(2, 5);
console.log(mySlice);

// Extraction without indexes
paraText("Extract without knowing indexes");
console.log(airlineP.slice(0, airlineP.indexOf(" ")));

paraText("Reverse Extraction");
console.log(airlineP.slice(airlineP.lastIndexOf(" ") + 1));

paraText("negative begin argument");
// Extraction from reverse
console.log(airlineP.slice(-3));
console.log(airlineP.slice(1, -3));

subHead("Function to determine Seat Positon");
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  s == "B" || s == "E" ? console.log("😔 Middle Seat") : console.log("✅ GUD");
};

checkMiddleSeat("69B");
checkMiddleSeat("66A");
checkMiddleSeat("33E");

paraText("String Object Function");
console.log(new String("jams"));

// Further calling methods on this string object
console.log("jams"[(-3, 2)]);

// Checking strings
console.log(typeof new String("Jams").slice(1));

// ======= New Section ===========
// ======= New Section ===========
// ======= New Section ===========

mainHead(`
123: Part 2 Below ⬇️
`);

subHead("Text Look Manipulations");

paraText("UpperCase and LowerCase");
// Define new variable here for usage
const airL = "Booty Sniff Airlines";
console.log(airL.toLowerCase());
console.log(airL.toUpperCase());
console.log("drinkz".toLowerCase());
console.log("drinkz".toUpperCase());

// Fix capitalization in passenfer name
const passe2 = "sIjun";
const passe2Lower = passe2.toLowerCase();
console.log(passe2Lower);
const passeCorect = passe2Lower[0].toUpperCase() + passe2Lower.slice(1);
console.log(`
Corrected Capitalization = ${passeCorect}
`);

subHead("Fucntion for Uppercase ");
// Function that will correct passenger name
function corectPN(name) {
  const corectPNLower = name.toLowerCase();
  const corectPNLowerCorrection =
    corectPNLower[0].toUpperCase() + corectPNLower.slice(1);
  console.log(`
  Input = ${name}
  Cor =  ${corectPNLowerCorrection}
  `);
}
corectPN("diUm");
corectPN("spIzmsiop");

paraText("Optimized Function");
// Function optimization done with google geminni
function optimizedCorectPN(name) {
  // Combine steps, using a template literal for readability:
  console.log(`
    Input = ${name}
    Cor   = ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`);
}
optimizedCorectPN("lIoNkP");

subHead("Check Email Function");
// Comparing email
const emailF = "jin@jin.io";
const loginEmail = "    Jin@Jin.iO \n";

// const lowerEmail = loginEmail.toLocaleLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalE = loginEmail.toLowerCase().trim();
console.log(normalE);
console.log(emailF === normalE);

// Trimming Space - Not visible directly
let textTrim = "  LickLick  ";
console.log(`
O = ${textTrim}
TrimStart = ${textTrim.trimStart()}
TrimEnd   = ${textTrim.trimEnd()}
`);

subHead("Replacing Parts of Strings");
// Using Replace commands
const priceGB = "288,77E";
const priceUS = priceGB.replace("E", "O").replace(",", ".");
console.log(priceGB, priceUS);

// Using words
const anno1 = "All passengers Boarding come to Boarding 23";
console.log(anno1.replaceAll("Boarding", "GATE"));

// Using regeular expressions for targeting door
const anno2 = "apple juice made of apples with apple icecream";
console.log(anno2.replace(/apple/g, "Banana"));

subHead("Methods that return booleans");
const pla1 = "A320neo";
console.log(pla1.includes("A320"));
console.log(pla1.includes("Boeing"));
console.log(pla1.startsWith("A3"));
console.log(pla1.endsWith("o"));

paraText("Using startswith and endswith");
// Check plane art part of new
const pla2 = "Airbusneo";
pla2.startsWith("Airbus") && pla2.endsWith("neo")
  ? console.log("Part of new Airbus Family")
  : console.log("NoBastard");

// Excercise
paraText("Excercise for testing for items ");
const checkBg1 = function (items) {
  const checkBg1LowCase = items.toLowerCase();
  checkBg1LowCase.includes("knife") || checkBg1LowCase.includes("gun")
    ? console.log("%c 😡Bastard No 🗡️ or 🔫 ", "color:red")
    : console.log("%c ✅✅✅go fucker ✅✅✅", "color:green");
};

checkBg1("Laptop, food , knife");
checkBg1("Socks and Camera");
checkBg1("Socs and  Gun");

// ======= New Section ===========
// ======= New Section ===========
// ======= New Section ===========

mainHead(`
124: Part 3 Below ⬇️
`);

subHead("Split Method");

const splitText1 = "big+booty+dancer";
const splitText1Arr = "giant+sbooty+sniffers".split("+");
console.log(splitText1Arr[1]);

console.log(splitText1);
console.log(splitText1.split("+"));
console.log("Bina Juni".split(" "));

const [nameFirst, nameSecond] = "minto hona".split(" ");
console.log(nameFirst, nameSecond);

subHead("Join Method");

const newName = ["Ms", nameFirst, nameSecond.toUpperCase()].join("<--->");
console.log(newName);

paraText("Function to capitalize names");

const capiNam = function (name) {
  const nama = name.split(" ");
  const namaUpper = [];
  for (const n of nama) {
    namaUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namaUpper.join(" "));
};

capiNam("jessica ann");
capiNam("dina onta");

paraText("Above function different method");
const capiNam2 = function (name) {
  const nama = name.split(" ");
  const namaUpper = [];
  for (const n of nama) {
    namaUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namaUpper.join(" "));
};

capiNam2("zing bang");

subHead("Padding String");

const mesg1 = "Go to Gate 23";
console.log(mesg1.padStart(25, "+").padEnd(35, "+"));
console.log("nina".padStart(25, "+").padEnd(50, ")"));
console.log(" jima ".padStart(10, "+").padEnd(13, "-"));

paraText("Function that does masking on credit card number");
const maskCrCa = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return console.log(last.padStart(str.length, "*"));
};

maskCrCa(123213);
maskCrCa("TestCard");

subHead("Repeat MEthod");
console.log("WARNING...Donna...".repeat(2));

const planesInLine = function (n) {
  console.log(`Now = ${n} planes in line ${"✈️".repeat(n)} `);
};

planesInLine(5);
planesInLine(2);
planesInLine(20);
