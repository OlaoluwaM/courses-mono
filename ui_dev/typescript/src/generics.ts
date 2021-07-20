function foo<T>(list: T[]): T {
  return list[0];
}

const bar = foo([1,2,3, 'a', 'b'])

class Assassin {
  constructor(public name: string, public attackPower: number) {
    this.name = name
    this.attackPower = attackPower
  }
}

const jar = foo([new Assassin('Ezio', 4000), new Assassin('Altair', 30000), new Assassin('Alexios', 90000000000)])
console.log(jar.name);

interface Tree<T>  {
	value: T;
	left?: Tree<T>
	right?: Tree<T>
}
