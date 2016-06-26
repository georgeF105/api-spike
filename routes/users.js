var express = require('express');
var router = express.Router();

var dummyData = {
  users:[
  {
    name: "Paul",
    dob: 1955
  },
  {
    name: "John",
    dob: 1970
  },
  {
    name: "Mark",
    dob: 1985
  }
  ]
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(dummyData.users);
});

router.get('/:id', function(req, res, next) {
  res.json(dummyData.users[req.params.id]);
});

module.exports = router;
