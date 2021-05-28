const http = require('http');
const fsPromise = require('fs/promises');

async function doOnRequest(request, response) {
  // console.dir({ request });
  // Send back a message saying "Welcome to Twitter"
  // code here...
  if (request.method === 'GET' && request.url === '/') {
    // read the index.html file and send it back to the client
    // code here...
    const htmlFile = await fsPromise.readFile('./index.html');
    response.end(htmlFile);
    // fs.createReadStream();
  } else if (request.method === 'GET' && request.url === '/style.css') {

    const cssFile = await fsPromise.readFile('./style.css');
    response.end(cssFile);
  } else if (request.method === 'POST' && request.url === '/sayHi') {
    // code here...
    await fsPromise.appendFile('./hi_log.txt', 'Somebody said hi. \n');
    response.end('hi back to you!');
  } else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    // code here...
    let chunks = [];

    // request.setEncoding('utf8');
    request.on('data', chunk => {
      chunks.push(chunk);
    });

    request.on('end', async () => {
      const body = chunks.toString();
      await fsPromise.appendFile('./hi_log.txt', `${body} \n`);

      switch (body) {
        case 'hello':
          response.end('hello there');
          break;

        case "what's up":
          response.end('the sky');
          break;

        default:
          response.end('good morning');
          break;
      }
    });
  } else {
    // Handle 404 error: page not found
    // code here...
    response.writeHead(404);
    response.end('Error: not found');
  }
}

const server = http.createServer(doOnRequest);

server.listen(3000);
