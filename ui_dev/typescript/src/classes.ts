export class Fruit {
  name: string;
  protected sweetness: number;
  private isEdible: boolean

  static cook(fruit: Fruit): string {
    return `Cooked ${fruit.name}`
  }

  constructor(name: string, sweetness = 50) {
    this.name = name;
    this.sweetness = sweetness;
    this.isEdible = true;
  }

  get tasty() {
    return this.sweetness > 60
  }
}

export class Apple extends Fruit {
  constructor(public variety: string) {
    super('Apple', 80)
    this.variety = variety
  }
}


type ExpectObject = {
  toEqual(valueToCompare: string | boolean): boolean;
  toBeTruthy(): boolean;
};

function expect(value: any): ExpectObject {
  const returnObject: ExpectObject = {
    toEqual(valueToCompare: string) {
      return value === valueToCompare;
    },

    toBeTruthy() {
      return !!value;
    },
  };

  return returnObject;
}

// Tests
const allTests: Function[] = [
  function test1(): boolean {
    // "should instantiate with just a name"

    const fruit = new Fruit('Apple');
    return expect(fruit.name).toEqual('Apple');
  },

  function test2(): boolean {
    // "should include a protected sweetness value that is 50 by default"

    const fruit = new Fruit('Apple');
    // Since this value is protected, TypeScript will throw an error here
    // We want to read this value in our tests, so we will expect the error

    // @ts-expect-error
    return [expect(fruit.name).toEqual('Apple'), expect(fruit.sweetness).toEqual(50)].every(
      v => !!v
    );
  },

  function test3(): boolean {
    // "should instantiate with a name and sweetness value"

    const fruit = new Fruit('Fruit', 80);

    // @ts-expect-error
    return [expect(fruit.name).toEqual('Fruit'), expect(fruit.sweetness).toEqual(80)].every(
      v => !!v
    );
  },

  function test4(): boolean {
    // "should include a get accessor called `tasty` that returns true if sweetness is greater than 60"

    const fruit = new Fruit('Fruit', 80);
    const assertion1: boolean = expect(fruit.tasty).toEqual(true);

    const notTasty = new Fruit('Fruit', 40);
    const assertion2: boolean = expect(notTasty.tasty).toEqual(false);

    return [assertion1, assertion2].every(v => !!v);
  },

  function test5(): boolean {
    // "should have a private 'isEdible' boolean property that is true."

    const fruit = new Fruit('Fruit');

    // @ts-expect-error
    return expect(fruit.isEdible).toBe(true);
  },

  function test6(): boolean {
    /* 'should have a static method called `cook` that cooks the fruit. It takes a fruit instance and returns a string that says "Cooked {fruit.name}"' */

    const fruit = new Fruit('Fruit', 80);

    return expect(Fruit.cook(fruit)).toEqual('Cooked Fruit');
  },

  function test7(): boolean {
    // "Apple class should instantiate properly, and include a variety field"

    const fiji = new Apple('fiji');

    return [
      expect(fiji instanceof Fruit).toBeTruthy(),
      expect(fiji.name).toEqual('Apple'),
      expect(fiji.variety).toEqual('fiji'),
    ].every(v => !!v);
  },
]

if (allTests.every(v => !!v)) {
  console.log('All tests pass');
} else console.log('Some tests are not passing');
