/*
This the restaurant object which is being used serveral times will 
put that object here and then import it
*/

export const restaurantP = {
  nameP: "Woman Juices",
  locationP: "Sweaty Gym Booties",
  categoriesP: ["Sno", "Far", "Sca", "Pis", "Spi"],
  starterMenuP: ["Swea", "Pits", "Pan"],
  mainMenuP: ["Jui", "Sti", "Smel"],

  // new additions
  openingHoursP: {
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

  // Order Methods
  order: function (starterIndex, mainIndex) {
    return [this.starterMenuP[starterIndex], this.mainMenuP[mainIndex]];
  },

  // Destrucuturing method
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(`
  Order Recieved ${this.starterMenuP[starterIndex]} and ${this.mainMenuP[mainIndex]} will be delivered to ${address} at ${time}
      `);
  },

  // New method added for learning about iteables
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Delicious Pasta with ${ing1}, ${ing2}, ${ing3}, `);
  },

  // Pizza ordering metho d
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient), console.log(otherIngredients);
  },
};

// The following line should be added to export the object
// export default restaurantP;

// Exporting the enhanced restaurant object
export const weekdays = ["mo", "tu", "we", "th", "fr", "sa", "su"];

const HoursP = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
  [`day-${2 + 0}`]: {
    open: 9,
    close: 6,
  },
};

export const restaurantP2 = {
  nameP: "Woman Juices",
  locationP: "Sweaty Gym Booties",
  categoriesP: ["Sno", "Far", "Sca", "Pis", "Spi"],
  starterMenuP: ["Swea", "Pits", "Pan"],
  mainMenuP: ["Jui", "Sti", "Smel"],

  // new additions - enhaced
  HoursP,

  // Order Methods
  order(starterIndex, mainIndex) {
    return [this.starterMenuP[starterIndex], this.mainMenuP[mainIndex]];
  },

  // DC method
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(`
    Order Recieved ${this.starterMenuP[starterIndex]} and ${this.mainMenuP[mainIndex]} will be delivered to ${address} at ${time}
        `);
  },

  // New method added for learning about iteables
  orderPasta(ing1, ing2, ing3) {
    console.log(`Delicious Pasta with ${ing1}, ${ing2}, ${ing3}, `);
  },

  // Pizza ordering metho d
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient), console.log(otherIngredients);
  },
};
