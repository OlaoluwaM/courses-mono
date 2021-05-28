class Greet {
  constructor() {
    this.greeting = 'Hello';
  }

  greet() {
    console.log(this.greeting);
  }
}

module.exports = new Greet();
