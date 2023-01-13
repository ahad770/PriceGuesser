require("dotenv").config();
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");

const uri = "";
const client = new MongoClient(uri);
app.use(express.json());

const statistics = [
  {
    username: "Ahad770",
    classic: { highScore: 100, games_played: 24, total_points: 240230 },
    competitive: { high_round: 23, games_played: 13, total_rounds: 104 },
  },
];

app.get("/user/score", authToken, (req, res) => {
  res.json(statistics.filter((statistic) => statistic.username === req.user.username));
});

app.post("/users/create", async (req, res) => {
  try {
    await client.connect();
    const hashedPassword = await bcrypt.hash(req.body.data.password, 10);
    const userDoc = {
      name: req.body.data.name,
      username: req.body.data.username,
      password: hashedPassword,
    };
    const db = client.db("development");
    const users = db.collection("users");

    const query = { username: userDoc.username };
    const userExistsInDb = (await users.findOne(query)) !== null;
    if (userExistsInDb) {
      res.status(500).send("Username already exists");
    } else {
      const result = await users.insertOne(userDoc);
      res
        .status(201)
        .send(
          `A user was added to the database with the id: ${result.insertedId}`
        );
    }
  } catch {
    res.status(500).send();
  } finally {
    await client.close();
  }
});

function authToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post("/users/login", async (req, res) => {
  console.log("...logging in");
  await client.connect();
  const db = client.db("development");
  const users = db.collection("users");

  const query = { username: req.body.username };

  const user = await users.findOne(query);

  if (user == null) {
    return res.status(400).send("User cannot be found!");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      res.send("Username / Passwords do not match");
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(5002);
