import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mosckUsers = [
  { id: 1, username: "rich", displayName: "Rachael" },
  { id: 2, username: "man", displayName: "Valorman" },
  { id: 3, username: "zamalana", displayName: "Adugalli" },
];

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
  res.send(mosckUsers);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const parsedId = parseInt(req.params.id);
  console.log(parsedId);
  if (isNaN(parsedId)) return res.status(400).send({ msg: "Invalid ID." });

  const findUser = mosckUsers.find((user) => user.id === parsedId);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

app.get("/api/products", (req, res) => {
  res.send([{ id: 123, name: "Drum Sticks", price: 14.99 }]);
});
