// implement your API here

const express = require("express");

const db = require("./data/db.js");

const server = express();

server.use(express.json());

server.get("/api/users", (req, res) => {
  db.find()
    .then(users => {
      console.log("users", users);
      res.status(201).json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err, message: "cannot get the data" });
    });
});

server.post("/api/users", (req, res) => {
  const userBody = req.body;

  db.insert(userBody)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err, message: "bummer" });
    });
});

server.listen(5000, () => {
  console.log("\n*** API running on port 5k ***\n");
});
