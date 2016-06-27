$.get('/users', function (users) {
  users.forEach(function (user) {
    $('#users-list').append('<li><a href=/user/"'+ user.id +'">' + user.name + '  DOB: ' + user.dob + '</a></li>')
  })
})
.fail(function (jqxhr) {
  $('#status').text('Error: ' + jqxhr.responseText)
})
