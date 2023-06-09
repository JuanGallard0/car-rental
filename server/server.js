require("dotenv").config();
const cors = require("cors");
var express = require("express");
const cars_routes = require("./routes/cars");
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

var app = express();

app.use(cors());
app.use(express.json());
app.use("/cars", cars_routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
