const fs = require("fs");
const express = require("express");
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${dirname}/dev-data/data/tours-simple.json`)
);

// app.get("/", (req, res) => {
//   res.status(200).json("Hello, from the server side!");
// });

// app.post("/", (req, res) => {
//   res.send("Posting to this endpoint...");
// });

app.get("/api/tours", (req, res) => {
  res.json({
    status: "success",
    data: {
      tours: tours,
    },
  });
});

app.app.listen((port = 3000), () => {
  console.log(`App running on port ${port}`);
});
