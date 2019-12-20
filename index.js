var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.json({ hello: 'Soamee rules!', env: 'production' });
});

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
