var express = require('express')
var app = express()

app.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.json(
    [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
      {id: 3, author: "Sergio Aguero", text: "hello there!"},
      {id: 4, author: "Sam Allardyce", text: "Don't fire me!"}
    ]
  );
 });

console.log('Server started!');
app.listen(3000)
