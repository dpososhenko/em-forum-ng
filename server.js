const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/em-forum-ng/'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/em-forum-ng/index.html'));
});

app.listen(process.env.PORT || 4200, () => {
  console.log(`App running on PORT: ${process.env.PORT || 4200}`);
});
