const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const albumsRouter = require("./routes/albumRoutes");

dotenv.config({path: path.resolve("../../.env")});

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../public")));
console.log(path.resolve(__dirname, "../public"));

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../public/views/grid.html")));
app.use("/", albumsRouter);

module.exports = app;
