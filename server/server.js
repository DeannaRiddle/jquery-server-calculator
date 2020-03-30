console.lot("server is running");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

const equations = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("server/public"));

app.get("/calculations", req, res => {
  res.send(equations);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
