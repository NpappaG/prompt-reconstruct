const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Get the requested URL and parse it
  const reqUrl = url.parse(req.url, true);

  // Get the path of the requested file
  let filePath = path.join(
    __dirname,
    'public',
    reqUrl.pathname === '/' ? 'index.html' : reqUrl.pathname
  );

  // Check if the requested file is a directory, and serve index.html if it is
  if (fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Get the file extension
  const extname = path.extname(filePath);

  // Set content type based on file extension
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read the requested file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // If file not found, serve 404 page
      if (err.code === 'ENOENT') {
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        // If other error, serve 500 page
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Serve the requested file
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

server.listen(port, () => console.log(`Server running on port ${port}`));
