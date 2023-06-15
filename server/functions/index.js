const functions = require("./config/firebase");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const users_routes = require("./express/api/routes/users");
const auth_routes = require("./express/api/routes/auth");
const cars_routes = require("./express/api/routes/cars");
const rentals_routes = require("./express/api/routes/rentals");

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use("/auth", auth_routes);
app.use("/users", users_routes);
app.use("/cars", cars_routes);
app.use("/rentals", rentals_routes);

exports.api = functions.https.onRequest(app);
