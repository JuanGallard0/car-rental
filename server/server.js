require("dotenv").config();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

var express = require("express");

var app = express();

const { books } = require("./handlers/books");

app.get("/books", books);
app.get("/", (req, res) => {
  res.send("This is my demo project");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
