// implement your API here

const express = require("express");

const db = require("./data/db.js");

const server = express();

server.use(express.json());

server.get("/api/users", (req, res) => {
  db.find()
    .then(users => {
      console.log("users", users);
      res.status(200).json(users);
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

server.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  db.remove(userId)
    .then(deleted => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ error: err, message: "cannot delete by id" });
    });
});

server.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  db.findById(userId)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err, message: "cannot delete" });
    });
});
server.listen(5000, () => {
  console.log("\n*** API running on port 5k ***\n");
});
