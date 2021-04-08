const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(3000, () => {
  console.log("Frontend server is ready");
});
