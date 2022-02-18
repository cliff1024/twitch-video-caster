/*
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola Mundo");
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
*/
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

const server = app.listen(3000, () => console.log("Server ready"));

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
