const fs = require('fs');
const crypto = require('crypto');
const stream = require('stream');
const hash = crypto.createHash('sha256');

new stream.Transform();
const writeableStream = fs.createWriteStream('./file-write.txt');
const readStream = fs.createReadStream('./file.txt');

writeableStream.on('pipe', src => {
  console.log(src);
});

readStream.pipe(writeableStream);
