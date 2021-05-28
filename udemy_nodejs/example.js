const memoryArray = new ArrayBuffer(8);
const view = new Uint8Array(memoryArray);
view[0] = 1;
view[1] = -2;
view[2] = 2;

console.log(view);
