 var express = require('express');
 var router = express.Router();
 
 router.get('/', function (req, res) {
    res.send('Welcome to API!');
  });

 require('./AuthRoute')(router);
 //require('./OfficerRoute')(router);
 //require('./VoterRoute')(router);

 module.exports.router = router;

