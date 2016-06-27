var express = require('express');
var router = express.Router();
var path = require('path')

var dummyData = {
  users:[
  {
    id:0,
    name: "Paul",
    dob: 1955
  },
  {
    id:1,
    name: "John",
    dob: 1970
  },
  {
    id:2,
    name: "Mark",
    dob: 1985
  }
  ]
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(dummyData.users);
  // res.sendfile(path.join(__dirname,'../public/html/users.html'))
});

router.get('/:id', function(req, res, next) {
  res.json(dummyData.users[req.params.id]);
});

module.exports = router;
