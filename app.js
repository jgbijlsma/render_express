const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server started"));

app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { messages: [...messages].reverse() });
});

app.post("/api/messages", (req, res) => {
  messages.push({
    user: req.body.name,
    text: req.body.message,
  });
  res.redirect("/");
});

// app.get("/api/messages", (req, res) => {
//   res.send(messages);
// });

const messages = [
  {
    user: "John Doe",
    text: "Hello, World!",
  },
  {
    user: "Jane Doe",
    text: "Welcome! 😎",
  },
];
