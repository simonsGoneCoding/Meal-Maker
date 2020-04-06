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

  addDishToCoourse(courseName, dishName, dishPrice) {
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
