const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Hello, from the server side!");
});

app.post("/", (req, res) => {
  res.send("Posting to this endpoint...");
});

app.app.listen((port = 3000), () => {
  console.log(`App running on port ${port}`);
});
