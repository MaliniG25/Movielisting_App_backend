require("dotenv").config();
const movieRoutes = require("./routers/movies/movies.js");
const express = require("express");
const db = require("./db/index.js");

const app = new express();
const port = process.env.PORT || 8080;
db();
app.use(express.json());
app.use("/movies",movieRoutes);

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});