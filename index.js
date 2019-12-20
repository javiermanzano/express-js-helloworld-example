var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.json({ hello: 'Soamee rules!', env: 'develop' });
});

const port = process.env.PORT || 3000
if (!module.parent) {
  app.listen(port);
  console.log(`Express started on port ${port}`);
}
