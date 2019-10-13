var express = require('express');
let bird = require("./birds");
var app = express();
app.use("/birds", bird);
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
