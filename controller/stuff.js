$(document).ready(function() {
$.ajax({
          url: '/airplane_db/signup',
          type: 'POST',
          data: {
            first_name: $('#first_name').val(),
            email: $('#email').val(),
            hashed_pw: $('#hashed_pw').val()
          },
          dataType: 'json'
        })
        .done((data) => {
          localStorage.setItem('userLogin', JSON.stringify({
            id: data.id,
            name: data.first_name
          }))
          window.location.href = './home.html'
        })




});
