var test = require('tape')
var request = require('supertest')
var app = require('../app')

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

test('Test works', function(t){
  request(app)
    .get('/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.ok(1,'Test works')
      t.end()
    })
})

test('/user gets expected users', function(t){
  request(app)
    .get('/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.deepEqual(res.body, dummyData.users, 'users equals expected')
      t.end()
    })
})

test('/user/:id gets expected user', function(t){
  request(app)
    .get('/users/1')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.deepEqual(res.body, dummyData.users[1], 'user equals expected')
      t.end()
    })
})
