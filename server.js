const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

http
  .createServer(function (request, response) {
    console.log("request starting...");

    let filePath = "." + request.url;
    if (filePath == "./") filePath = "./index.html";

    let extname = path.extname(filePath);
    let contentType = "text/html";
    switch (extname) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".jpg":
        contentType = "image/jpg";
        break;
    }

    fs.readFile(filePath, (error, content) => {
      response.writeHead(200, { "Content-Type": contentType });
      response.end(content, "utf-8");
    });
  })
  .listen(PORT);
console.log(`server listening at http://localhost:${PORT} 🚀`);
