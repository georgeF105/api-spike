$.get('/users', function (users) {
  users.forEach(function (user) {
    $('#users-list').append('<li>' + user.name + '  DOB: ' + user.dob + '</li>')
  })
})
.fail(function (jqxhr) {
  $('#status').text('Error: ' + jqxhr.responseText)
})
