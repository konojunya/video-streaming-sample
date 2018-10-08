const express = require("express");
const app = express();

app.use(express.static("public"))
app.use(express.static("videos"))

app.get("/", (req, res) => {
  res.sendfile("public/index.html");
})

app.listen(3000);