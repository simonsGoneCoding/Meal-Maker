const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  //getter mehtods:
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  //setter methods:
  set appetizers(item) {
    this._courses.appetizers = item;
  },
  set mains(item) {
    this._courses.mains = item;
  },
  set desserts(item) {
    this._courses.desserts = item;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = { dishName, dishPrice };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
    return `Total price for ${appetizer.dishName}, ${main.dishName}, ${dessert.dishName} is: ${totalPrice}`;
  }
};

menu.addDishToCourse("appetizers", "cezar salad", 6.5);
menu.addDishToCourse("appetizers", "tapa", 4.5);
console.log(menu.appetizers);

menu.addDishToCourse("desserts", "brownie", 2.9);
console.log(menu.desserts);

menu.addDishToCourse("mains", "meat and potatos", 9.5);
console.log(menu.mains);

console.log(menu.generateRandomMeal());
