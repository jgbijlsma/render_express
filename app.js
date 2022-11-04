const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server started"));

app.get("/api/book", (req, res) => {
  res.send({
    name: "Harry Potter",
    author: "J.K.Rowling",
  });
});
