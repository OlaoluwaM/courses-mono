const EventEmitter = require('events');
console.log(EventEmitter);

const myEmitter = new EventEmitter();

const getDogs = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Woof', 'Woof', 'Woof']);
    }, 500);
  });
};

myEmitter.on('error', () => console.log('error'));

myEmitter.on('event', () => {
  // const dogs = await getDogs();
  // try {
  // } catch (error) {
  //   console.log(dogs);
  // }

  throw new Error(1);
});
myEmitter.on('event', () => console.log('after'));

myEmitter.emit('event');
