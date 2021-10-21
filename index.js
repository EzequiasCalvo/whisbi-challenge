const http = require("http");
const fs = require("fs");

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(res);
});

server.listen(PORT, "127.0.0.1");
console.log(`server listening at http://localhost:${PORT} 🚀`);
