const router = require('express').Router();
const path = require('path');

router.use('/appointments', require('./controllers'));

router.get('*',(req,res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


module.exports = router;
