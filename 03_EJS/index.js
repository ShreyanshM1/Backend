const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, "/public/JS")));
app.use(express.static(path.join(__dirname, "/public/CSS")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/rollDice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { diceVal });
});

// app.get("/ig/:username",(req,res) => {
//   const followers = ["adam","bob","kelvin","abc"];
//    let { username } = req.params;
//    res.render("insta.ejs",{username,followers});
// });

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  if (data) {
    res.render("insta.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

// Express automatically require EJS
// EJS --> Render (Big Files) and in this file we send EJS file
// When we call res.render, Express try to finds the view dir and search the home.ejs

//We run the server from ExpressDir it gives the send output but for render it does not work. So, we use path.join function
