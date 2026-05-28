const http = require("http");
const WebSocket = require("ws");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Server is running");
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.send("Hello from GitHub Actions");

  ws.on("message", (msg) => {
    ws.send(`Echo: ${msg}`);
  });
});

server.listen(3000, () => {
  console.log("Listening on 3000");
});
