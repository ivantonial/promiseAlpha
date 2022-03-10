const express = require("express");
const app = express();

app.use("/", express.static("./src"));

const port = 8080;

app.listen(port, () => console.log(`Working on port: ${port}`)); 