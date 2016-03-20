$(function () {
  $.get('http://10.58.78.170:3000/users', function (data) {
    console.log(data);
    var users =data.users;
    var smokingUsers = users.filter(function(user){
      return user.smokes ===true;
    });
    console.log(smokingUsers);
    $('#app').append(smokingUsers.sort(function(a,b){return a.age- b.age;
    }).sort(function(a,b){ return a.country- b.country}).map(function(user){
      return $('<p>').text(user.name +' '+ user.age+ " "+ user.country)

    }));
  });
});
