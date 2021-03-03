const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      PORT = process.env.port || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('build'));
app.use(require('./router'));

app.listen(PORT, ()=>{
  console.log(`App listening on ${PORT}`)
});


